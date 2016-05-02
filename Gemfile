source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.2'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# YUI Compressor for minifying JavaScript and CSS
gem 'yui-compressor', '~> 0.12.0'

# JavaScript Engine from Chrome
gem 'libv8', '3.16.14.5'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

gem 'twitter-bootstrap-rails'

# Jacascript Engine for LESS conversion
#gem 'therubyrhino', '~> 2.0', '>= 2.0.4'

# -------- LESS ------------------------
# Added LESS for stylesheets
group :assets do
  gem 'less'
  gem 'less-rails', '~> 2.7.0'
end
# -------------------------------------


# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'


group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

group :development, :test do
	# Use sqlite3 as the database for Active Record
	gem 'sqlite3'
end

group :production do
	gem 'pg'
	gem 'rails_12factor'
end


# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.1.2'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]
