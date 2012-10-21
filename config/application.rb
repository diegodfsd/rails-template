require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(:default, :assets, Rails.env) if defined?(Bundler)

module RailsTemplate
  class Application < Rails::Application
    config.autoload_paths += %W(#{config.root}/lib)
    config.time_zone = 'Brasilia'
    # altera o ActiveRecord pra gravar os campos mágicos com o mesmo time zone da aplicação
    config.active_record.default_timezone = :local
    config.i18n.load_path += Dir[Rails.root.join('config/locales/**/*.yml').to_s]
    config.i18n.available_locales = [:en, :"pt-BR"]
    config.i18n.default_locale = :"pt-BR"
    config.encoding = "utf-8"
    config.filter_parameters += [:password]
    config.active_support.escape_html_entities_in_json = true
    config.active_record.whitelist_attributes = true
    config.assets.enabled = true
    config.generators.test_framework :rspec, :fixtures => false, :view_specs => false
  end
end