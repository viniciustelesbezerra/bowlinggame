require 'simplecov'
SimpleCov.start do; end

require 'rubygems'
# Dir[Rails.root.join("spec/support/**/*.rb")].each {|f| require f}

RSpec.configure do |config|
  config.color = true
  config.tty = true
  config.mock_with :rspec
end