# frozen_string_literal: true

# name: zupass-login
# about: Allows users to login with zupass.
# version: 0.1

enabled_site_setting :oauth2_enabled

require_relative "lib/omniauth/strategies/oauth2_basic"
require_relative "lib/oauth2_faraday_formatter"
require_relative "lib/oauth2_basic_authenticator"

# You should use this register if you want to add custom paths to traverse the user details JSON.
# We'll store the value in the user associated account's extra attribute hash using the full path as the key.
DiscoursePluginRegistry.define_filtered_register :oauth2_basic_additional_json_paths

# After authentication, we'll use this to confirm that the registered json paths are fulfilled, or display an error.
# This requires SiteSetting.oauth2_fetch_user_details? to be true, and can be used with
# DiscoursePluginRegistry.oauth2_basic_additional_json_paths.
#
# Example usage:
# DiscoursePluginRegistry.register_oauth2_basic_required_json_path({
#   path: "extra:data.is_allowed_user",
#   required_value: true,
#   error_message: I18n.t("auth.user_not_allowed")
# }, self)
# DiscoursePluginRegistry.define_filtered_register :oauth2_basic_required_json_paths

auth_provider custom_url: "https://zugitproof.chainsafe.dev", title: "Login With ZuPass", authenticator: OAuth2BasicAuthenticator.new

require_relative "lib/validators/oauth2_basic/oauth2_fetch_user_details_validator"
