# frozen_string_literal: true

# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/ai_review.proto

require 'google/protobuf'

descriptor_data = "\n\x12v2/ai_review.proto\x12\tschema.v2\x1a\x17v2/project_source.proto\"\x9e\x01\n\x16ProjectAiReviewRequest\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x1b\n\x03git\x18\x03 \x01(\x0b\x32\x0e.schema.v2.Git\x12\x30\n\x0eproject_source\x18\x04 \x01(\x0b\x32\x18.schema.v2.ProjectSourceb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool

begin
  pool.add_serialized_file(descriptor_data)
rescue TypeError
  # Compatibility code: will be removed in the next major version.
  require 'google/protobuf/descriptor_pb'
  parsed = Google::Protobuf::FileDescriptorProto.decode(descriptor_data)
  parsed.clear_dependency
  serialized = parsed.class.encode(parsed)
  file = pool.add_serialized_file(serialized)
  warn "Warning: Protobuf detected an import path issue while loading generated file #{__FILE__}"
  imports = [
    ['schema.v2.Git', 'v2/project_source.proto']
  ]
  imports.each do |type_name, expected_filename|
    import_file = pool.lookup(type_name).file_descriptor
    if import_file.name != expected_filename
      warn "- #{file.name} imports #{expected_filename}, but that import was loaded as #{import_file.name}"
    end
  end
  warn 'Each proto file must use a consistent fully-qualified name.'
  warn 'This will become an error in the next major version.'
end

module Schema
  module V2
    ProjectAiReviewRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup('schema.v2.ProjectAiReviewRequest').msgclass
  end
end
