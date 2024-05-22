# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/project_ticket.proto

require 'google/protobuf'

descriptor_data = "\n\x17v2/project_ticket.proto\x12\tschema.v2\x1a\x13v2/block_core.proto\x1a\x16v2/project_figma.proto\"\xaf\x01\n\x1cProjectTicketCreationRequest\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12$\n\x05\x66igma\x18\x03 \x01(\x0b\x32\x10.schema.v2.FigmaH\x00\x88\x01\x01\x12(\n\tuse_cases\x18\x04 \x03(\x0b\x32\x15.schema.v2.core.BlockB\x08\n\x06_figma\"\x82\x03\n\x1dProjectTicketCreationResponse\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12?\n\x06module\x18\x03 \x01(\x0e\x32/.schema.v2.ProjectTicketCreationResponse.Module\x12?\n\x06status\x18\x04 \x01(\x0e\x32/.schema.v2.ProjectTicketCreationResponse.Status\x12\x13\n\x0btoken_usage\x18\x05 \x01(\x05\x12&\n\x07tickets\x18\x06 \x03(\x0b\x32\x15.schema.v2.core.Block\x12\x15\n\rerror_message\x18\x07 \x01(\t\"\x1f\n\x06Module\x12\x15\n\x11USECASE_TO_TICKET\x10\x00\"3\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0e\n\nINPROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\"\xcc\x02\n!ProjectTicketCreationByApiRequest\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12#\n\x04\x61pis\x18\x04 \x03(\x0b\x32\x15.schema.v2.core.Block\x12&\n\x07tickets\x18\x05 \x03(\x0b\x32\x15.schema.v2.core.Block\x12O\n\rpull_requests\x18\x06 \x03(\x0b\x32\x38.schema.v2.ProjectTicketCreationByApiRequest.PullRequest\x1aR\n\x0bPullRequest\x12\x0e\n\x06number\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0e\n\x06status\x18\x03 \x01(\t\x12\x15\n\rblock_node_id\x18\x04 \x01(\t\"\x8d\x03\n\"ProjectTicketCreationByApiResponse\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x44\n\x06module\x18\x03 \x01(\x0e\x32\x34.schema.v2.ProjectTicketCreationByApiResponse.Module\x12\x44\n\x06status\x18\x04 \x01(\x0e\x32\x34.schema.v2.ProjectTicketCreationByApiResponse.Status\x12\x13\n\x0btoken_usage\x18\x05 \x01(\x05\x12&\n\x07tickets\x18\x06 \x03(\x0b\x32\x15.schema.v2.core.Block\x12\x15\n\rerror_message\x18\x07 \x01(\t\"\x1b\n\x06Module\x12\x11\n\rAPI_TO_TICKET\x10\x00\"3\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0e\n\nINPROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x62\x06proto3"

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
    ["schema.v2.Figma", "v2/project_figma.proto"],
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
    ProjectTicketCreationRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectTicketCreationRequest").msgclass
    ProjectTicketCreationResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectTicketCreationResponse").msgclass
    ProjectTicketCreationResponse::Module = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectTicketCreationResponse.Module").enummodule
    ProjectTicketCreationResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectTicketCreationResponse.Status").enummodule
    ProjectTicketCreationByApiRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectTicketCreationByApiRequest").msgclass
    ProjectTicketCreationByApiRequest::PullRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectTicketCreationByApiRequest.PullRequest").msgclass
    ProjectTicketCreationByApiResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectTicketCreationByApiResponse").msgclass
    ProjectTicketCreationByApiResponse::Module = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectTicketCreationByApiResponse.Module").enummodule
    ProjectTicketCreationByApiResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectTicketCreationByApiResponse.Status").enummodule
  end
end
