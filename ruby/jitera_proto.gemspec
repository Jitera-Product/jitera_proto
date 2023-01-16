# frozen_string_literal: true

require_relative "lib/version"

Gem::Specification.new do |spec|
  spec.name = "jitera_proto"
  spec.version = JiteraProto::VERSION
  spec.authors = ["MQuy"]
  spec.email = ["quy.truong@jitera.com"]

  spec.summary = "Jitera payload's proto"
  spec.required_ruby_version = ">= 2.6.0"

  spec.metadata["homepage_uri"] = "https://github.com/Jitera-Product/jitera_proto"
  spec.metadata["source_code_uri"] = "https://github.com/Jitera-Product/jitera_proto"

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files = Dir.chdir(__dir__) do
    `git ls-files -z`.split("\x0").reject do |f|
      (f == __FILE__) || f.match(%r{\A(?:(?:bin|test|spec|features)/|\.(?:git|travis|circleci)|appveyor)})
    end
  end
  spec.bindir = "exe"
  spec.executables = spec.files.grep(%r{\Aexe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  # Uncomment to register a new dependency of your gem
  spec.add_dependency "grpc", "~> 1.50.0"
  spec.add_dependency "google-protobuf", "~> 3.21.12"

  # For more information and examples about making a new gem, check out our
  # guide at: https://bundler.io/guides/creating_gem.html
end
