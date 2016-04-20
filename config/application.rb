require File.expand_path('../boot', __FILE__)

require 'rails/all'
require "action_mailer/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module Jamesbumbalough
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # Update Asset Paths to include custom Fonts
    config.assets.paths << Rails.root.join("app", "assets", "fonts")

    # Make Rails 4 serve my assets - same as rails_12factor?
    config.serve_static_assets = true

    #Precompile Images
    config.assets.precompile += %w(*.png *.jpg *.jpeg *.gif)

    #Precompile CSS assets
    config.assets.precompile += %w(*.css)

    #Precompile JS assets
    config.assets.precompile += %w(*.js)

    #Precompile Font Assets
    config.assets.precompile += %w(*.eot *.svg *.ttf *.woff *.otf *.woff2)
  end
end
