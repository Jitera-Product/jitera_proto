# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/project_git.proto

require 'google/protobuf'


descriptor_data = "\n\x14v2/project_git.proto\x12\tschema.v2\x1a\x13v2/block_core.proto\x1a\x17v2/project_source.proto\"\xc0\x02\n\x15ProjectGitSyncRequest\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x1b\n\x03git\x18\x03 \x01(\x0b\x32\x0e.schema.v2.Git\x12\x30\n\x0eproject_source\x18\x04 \x01(\x0b\x32\x18.schema.v2.ProjectSource\x12\x15\n\rchanged_files\x18\x05 \x03(\t\x12\x41\n\x0b\x61\x63tion_type\x18\x06 \x01(\x0e\x32\'.schema.v2.ProjectGitSyncRequest.ActionH\x00\x88\x01\x01\"7\n\x06\x41\x63tion\x12\x0f\n\x0b\x43ODE_TO_ERD\x10\x00\x12\x1c\n\x18\x43ODE_TO_NATURAL_LANGUAGE\x10\x01\x42\x0e\n\x0c_action_type\"\x92\x03\n\x16ProjectGitSyncResponse\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x38\n\x06module\x18\x03 \x01(\x0e\x32(.schema.v2.ProjectGitSyncResponse.Module\x12\x38\n\x06status\x18\x04 \x01(\x0e\x32(.schema.v2.ProjectGitSyncResponse.Status\x12\x13\n\x0btoken_usage\x18\x05 \x01(\x05\x12%\n\x06\x62locks\x18\x06 \x03(\x0b\x32\x15.schema.v2.core.Block\x12\x0c\n\x04\x65rds\x18\x07 \x01(\t\x12\x15\n\rerror_message\x18\x08 \x01(\t\"7\n\x06Module\x12\x0f\n\x0b\x43ODE_TO_ERD\x10\x00\x12\x1c\n\x18\x43ODE_TO_NATURAL_LANGUAGE\x10\x01\"3\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0e\n\nINPROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x62\x06proto3"

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
    ["schema.v2.Git", "v2/project_source.proto"],
    ["schema.v2.core.Block", "v2/block_core.proto"],
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
    ProjectGitSyncRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectGitSyncRequest").msgclass
    ProjectGitSyncRequest::Action = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectGitSyncRequest.Action").enummodule
    ProjectGitSyncResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectGitSyncResponse").msgclass
    ProjectGitSyncResponse::Module = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectGitSyncResponse.Module").enummodule
    ProjectGitSyncResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectGitSyncResponse.Status").enummodule
  end
end
