# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/user_case_creation.proto

require 'google/protobuf'


descriptor_data = "\n\x1bv2/user_case_creation.proto\x12\tschema.v2\"\xa0\x02\n\x10UserCaseCreation\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\'\n\nuser_cases\x18\x03 \x03(\x0b\x32\x13.schema.v2.UserCase\x12\x38\n\x08progress\x18\x04 \x01(\x0b\x32$.schema.v2.UserCaseCreation.ProgressH\x00\x12\x32\n\x05\x65rror\x18\x05 \x01(\x0b\x32!.schema.v2.UserCaseCreation.ErrorH\x00\x1a\x1b\n\x08Progress\x12\x0f\n\x07message\x18\x01 \x01(\t\x1a\x18\n\x05\x45rror\x12\x0f\n\x07message\x18\x01 \x01(\tB\x07\n\x05state\"\x8f\x02\n\x08UserCase\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0f\n\x07node_id\x18\x02 \x01(\t\x12\x16\n\x0eparent_node_id\x18\x03 \x01(\t\x12\x12\n\nblock_type\x18\x04 \x01(\t\x12,\n\x07\x63ontent\x18\x05 \x03(\x0b\x32\x1b.schema.v2.UserCase.Content\x12\x30\n\nproperties\x18\x06 \x01(\x0b\x32\x1c.schema.v2.UserCase.Property\x12\x12\n\nproject_id\x18\x07 \x01(\x05\x1a&\n\x07\x43ontent\x12\x0c\n\x04type\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t\x1a\x1c\n\x08Property\x12\x10\n\x08\x63\x61tegory\x18\x01 \x01(\tb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool

begin
  pool.add_serialized_file(descriptor_data)
rescue TypeError => e
  # Compatibility code: will be removed in the next major version.
  require 'google/protobuf/descriptor_pb'
  parsed = Google::Protobuf::FileDescriptorProto.decode(descriptor_data)
  parsed.clear_dependency
  serialized = parsed.class.encode(parsed)
  file = pool.add_serialized_file(serialized)
  warn "Warning: Protobuf detected an import path issue while loading generated file #{__FILE__}"
  imports = [
  ]
  imports.each do |type_name, expected_filename|
    import_file = pool.lookup(type_name).file_descriptor
    if import_file.name != expected_filename
      warn "- #{file.name} imports #{expected_filename}, but that import was loaded as #{import_file.name}"
    end
  end
  warn "Each proto file must use a consistent fully-qualified name."
  warn "This will become an error in the next major version."
end

module Schema
  module V2
    UserCaseCreation = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.UserCaseCreation").msgclass
    UserCaseCreation::Progress = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.UserCaseCreation.Progress").msgclass
    UserCaseCreation::Error = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.UserCaseCreation.Error").msgclass
    UserCase = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.UserCase").msgclass
    UserCase::Content = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.UserCase.Content").msgclass
    UserCase::Property = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.UserCase.Property").msgclass
  end
end
