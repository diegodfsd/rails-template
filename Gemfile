source 'https://rubygems.org'

gem 'rails'        , '3.2.8'
gem 'pg'
gem 'i18n-js'
gem 'simple_form'
gem 'responders'
gem 'devise'        , '~> 2.1.2'       

group :assets do
  gem 'sass-rails'  , '~> 3.2.3'
  gem 'uglifier'
end

group :development, :test do
  gem 'sextant'
  gem 'thin'
  gem 'awesome_print' , :require => false
  gem 'pry'           , :require => false
  gem 'rspec-rails'   , '~> 2.0'
  gem 'rb-fsevent' #to make use of file change events and don't rely on polling
  gem 'guard'
  gem 'guard-rspec'
  gem 'growl'
end

group :test do
  gem 'factory_girl'
  gem 'capybara'
end