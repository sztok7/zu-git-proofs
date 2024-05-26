# frozen_string_literal: true

class OmniAuth::Strategies::Oauth2Basic
  include OmniAuth::Strategy

  option :name, "oauth2_basic"

  uid do
    request.params['email']
  end

  # info do
  #   {
  #     pcd: request.params['pcd'],
  #     signature: request.params['signature'],
  #     badges: request.params['badges'].split('.'),
  #     display_name: "anon" + request.params['email'].split("@").first
  #   }
  # end

  def callback_phase
    # Verify pcd

    # Create or login user
    display_name = "anon" + request.params['email'].split("@").first
    email = request.params['email']
    user = User.find_by_email(email)

    if !user
      username = UserNameSuggester.sanitize_username(display_name)
      newuser = User.create!(
          email: email,
          username: username,
          name: display_name.presence || User.suggest_name(email),
          active: true,
        )
      user = newuser
      
      cookie_jar = ActionDispatch::Request.new(request.env).cookie_jar
      provider = Discourse.current_user_provider.new(request.env)
      provider.log_on_user(newuser, session, cookie_jar)
    else
      cookie_jar = ActionDispatch::Request.new(request.env).cookie_jar
      provider = Discourse.current_user_provider.new(request.env)
      provider.log_on_user(user, session, cookie_jar)
    end

    split_array = request.params['badges'].split(',')
    split_array.each do |element|
      new_badge = Badge.find_by(name: element)
      unless new_badge
        new_badge = Badge.create!(
          name: element,
          badge_type_id: 1
        )
      end

      user_badge_exists = UserBadge.find_by(user_id: user.id, badge_id: new_badge.id)
      unless user_badge_exists
        UserBadge.create!(
          user_id: user.id,
          badge_id: new_badge.id,
          granted_by_id: 1,
          granted_at: Time.zone.now
        )
      end
    end

    super
  end

  def callback_url
    Discourse.base_url_no_prefix + script_name + callback_path
  end
end
