# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/project_preview.proto

require 'google/protobuf'

require 'v2/project_source_pb'


descriptor_data = "\n\x18v2/project_preview.proto\x12\tschema.v2\x1a\x17v2/project_source.proto\"\x88\x02\n\x15ProjectPreviewRequest\x12\x1a\n\x12project_preview_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x30\n\x0eproject_source\x18\x03 \x01(\x0b\x32\x18.schema.v2.ProjectSource\x12\x1b\n\x03git\x18\x04 \x01(\x0b\x32\x0e.schema.v2.Git\x12\x32\n\x04logs\x18\x05 \x03(\x0b\x32$.schema.v2.ProjectPreviewRequest.Log\x1a<\n\x03Log\x12\x0f\n\x07\x63ommand\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x02 \x01(\t\x12\x0f\n\x07\x63ontent\x18\x03 \x01(\t\"\xcc\x01\n\x16ProjectPreviewResponse\x12\x1a\n\x12project_preview_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x38\n\x06status\x18\x04 \x01(\x0e\x32(.schema.v2.ProjectPreviewResponse.Status\x12\x13\n\x0btoken_usage\x18\x05 \x01(\x05\"3\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0e\n\nINPROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\"@\n\x18\x44\x65ployGenerateScriptItem\x12\x0f\n\x07\x63ommand\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x02 \x01(\t\"\xe3\x01\n#ProjectPreviewDeployGenerateRequest\x12\x1a\n\x12project_preview_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x30\n\x0eproject_source\x18\x03 \x01(\x0b\x32\x18.schema.v2.ProjectSource\x12\x1b\n\x03git\x18\x04 \x01(\x0b\x32\x0e.schema.v2.Git\x12=\n\x10previous_scripts\x18\x05 \x03(\x0b\x32#.schema.v2.DeployGenerateScriptItem\"\x9e\x02\n$ProjectPreviewDeployGenerateResponse\x12\x1a\n\x12project_preview_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x46\n\x06status\x18\x04 \x01(\x0e\x32\x36.schema.v2.ProjectPreviewDeployGenerateResponse.Status\x12\x13\n\x0btoken_usage\x18\x05 \x01(\x05\x12\x34\n\x07scripts\x18\x06 \x03(\x0b\x32#.schema.v2.DeployGenerateScriptItem\"3\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0e\n\nINPROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x62\x06proto3"

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
    ["schema.v2.ProjectSource", "v2/project_source.proto"],
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
    ProjectPreviewRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectPreviewRequest").msgclass
    ProjectPreviewRequest::Log = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectPreviewRequest.Log").msgclass
    ProjectPreviewResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectPreviewResponse").msgclass
    ProjectPreviewResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectPreviewResponse.Status").enummodule
    DeployGenerateScriptItem = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.DeployGenerateScriptItem").msgclass
    ProjectPreviewDeployGenerateRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectPreviewDeployGenerateRequest").msgclass
    ProjectPreviewDeployGenerateResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectPreviewDeployGenerateResponse").msgclass
    ProjectPreviewDeployGenerateResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectPreviewDeployGenerateResponse.Status").enummodule
  end
end
