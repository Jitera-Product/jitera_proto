# frozen_string_literal: true

# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/use_case_creation.proto

require 'google/protobuf'

require 'google/protobuf/struct_pb'

descriptor_data = "\n\x1av2/use_case_creation.proto\x12\tschema.v2\x1a\x1cgoogle/protobuf/struct.proto\x1a\x17v2/project_source.proto\x1a\x13v2/block_core.proto\"\xd9\x05\n\x0fUseCaseCreation\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12%\n\tuse_cases\x18\x03 \x03(\x0b\x32\x12.schema.v2.UseCase\x12&\n\x07tickets\x18\t \x03(\x0b\x32\x15.schema.v2.core.Block\x12\x41\n\x0fhtml_wireframes\x18\x07 \x03(\x0b\x32(.schema.v2.UseCaseCreation.HtmlWireframe\x12\x37\n\x08progress\x18\x04 \x01(\x0b\x32#.schema.v2.UseCaseCreation.ProgressH\x00\x12\x31\n\x05\x65rror\x18\x05 \x01(\x0b\x32 .schema.v2.UseCaseCreation.ErrorH\x00\x12\x44\n\x0eproject_tables\x18\x06 \x01(\x0b\x32\'.schema.v2.UseCaseCreation.ProjectTableH\x01\x88\x01\x01\x12\x44\n\x0erelated_tables\x18\x08 \x01(\x0b\x32\'.schema.v2.UseCaseCreation.ProjectTableH\x02\x88\x01\x01\x1a\x1b\n\x08Progress\x12\x0f\n\x07message\x18\x01 \x01(\t\x1a\x18\n\x05\x45rror\x12\x0f\n\x07message\x18\x01 \x01(\t\x1at\n\x0cProjectTable\x12.\n\x06tables\x18\x01 \x03(\x0b\x32\x1e.schema.v2.ProjectSource.Table\x12\x34\n\trelations\x18\x02 \x03(\x0b\x32!.schema.v2.ProjectSource.Relation\x1a)\n\rHtmlWireframe\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04html\x18\x02 \x01(\tB\x07\n\x05stateB\x11\n\x0f_project_tablesB\x11\n\x0f_related_tables\"\xb0\x02\n\x07UseCase\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0f\n\x07node_id\x18\x03 \x01(\t\x12\x16\n\x0eparent_node_id\x18\x04 \x01(\t\x12\x12\n\nblock_type\x18\x05 \x01(\t\x12+\n\x07\x63ontent\x18\x06 \x03(\x0b\x32\x1a.schema.v2.UseCase.Content\x12\x30\n\nproperties\x18\x07 \x01(\x0b\x32\x17.google.protobuf.StructH\x00\x88\x01\x01\x12\x12\n\nproject_id\x18\x08 \x01(\x05\x12$\n\x08\x63hildren\x18\t \x03(\x0b\x32\x12.schema.v2.UseCase\x1a&\n\x07\x43ontent\x12\x0c\n\x04type\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\tB\r\n\x0b_properties\"\xfd\x02\n\x17UseCaseCreationResponse\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x0f\n\x07message\x18\x02 \x01(\t\x12\x39\n\x06module\x18\x03 \x01(\x0e\x32).schema.v2.UseCaseCreationResponse.Module\x12\x39\n\x06status\x18\x04 \x01(\x0e\x32).schema.v2.UseCaseCreationResponse.Status\x12\x13\n\x0btoken_usage\x18\x05 \x01(\x05\"Y\n\x06Module\x12\x0f\n\x0bUNSPECIFIED\x10\x00\x12\x12\n\x0e\x42USINESS_LOGIC\x10\x01\x12\x07\n\x03\x45RD\x10\x02\x12\x07\n\x03\x41PI\x10\x03\x12\t\n\x05IMAGE\x10\x04\x12\r\n\tWIREFRAME\x10\x05\"H\n\x06Status\x12\x16\n\x12STATUS_UNSPECIFIED\x10\x00\x12\x0b\n\x07STARTED\x10\x01\x12\r\n\tSUCCEEDED\x10\x02\x12\n\n\x06\x46\x41ILED\x10\x03\x62\x06proto3"

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
    ['schema.v2.core.Block', 'v2/block_core.proto'],
    ['schema.v2.ProjectSource.Table', 'v2/project_source.proto'],
    ['google.protobuf.Struct', 'google/protobuf/struct.proto']
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
    UseCaseCreation = ::Google::Protobuf::DescriptorPool.generated_pool.lookup('schema.v2.UseCaseCreation').msgclass
    UseCaseCreation::Progress = ::Google::Protobuf::DescriptorPool.generated_pool.lookup('schema.v2.UseCaseCreation.Progress').msgclass
    UseCaseCreation::Error = ::Google::Protobuf::DescriptorPool.generated_pool.lookup('schema.v2.UseCaseCreation.Error').msgclass
    UseCaseCreation::ProjectTable = ::Google::Protobuf::DescriptorPool.generated_pool.lookup('schema.v2.UseCaseCreation.ProjectTable').msgclass
    UseCaseCreation::HtmlWireframe = ::Google::Protobuf::DescriptorPool.generated_pool.lookup('schema.v2.UseCaseCreation.HtmlWireframe').msgclass
    UseCase = ::Google::Protobuf::DescriptorPool.generated_pool.lookup('schema.v2.UseCase').msgclass
    UseCase::Content = ::Google::Protobuf::DescriptorPool.generated_pool.lookup('schema.v2.UseCase.Content').msgclass
    UseCaseCreationResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup('schema.v2.UseCaseCreationResponse').msgclass
    UseCaseCreationResponse::Module = ::Google::Protobuf::DescriptorPool.generated_pool.lookup('schema.v2.UseCaseCreationResponse.Module').enummodule
    UseCaseCreationResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup('schema.v2.UseCaseCreationResponse.Status').enummodule
  end
end
