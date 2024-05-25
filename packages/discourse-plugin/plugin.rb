# frozen_string_literal: true

# name: zu-git-proofs
# about: Connects user with zupass to collect and verify github contributions
# version: 0.0.1
# url: https://github.com/sztok7/zu-git-proofs/tree/main/packages/discourse-plugin

enabled_site_setting :plugin_name_enabled

module ::MyPluginModule
  PLUGIN_NAME = "zu-git-proofs"
end

require_relative "lib/my_plugin_module/engine"

after_initialize do
  # Code which should run after Rails has finished booting
end
