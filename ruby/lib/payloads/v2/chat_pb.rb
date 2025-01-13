# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/chat.proto

require 'google/protobuf'

require 'google/protobuf/struct_pb'


descriptor_data = "\n\rv2/chat.proto\x12\tschema.v2\x1a\x1cgoogle/protobuf/struct.proto\"\x80\x03\n\x0b\x43hatRequest\x12#\n\x07session\x18\x01 \x01(\x0b\x32\x12.schema.v2.Session\x12\x0f\n\x07\x63hat_id\x18\x02 \x01(\t\x12\x32\n\x06status\x18\x03 \x01(\x0e\x32\x1d.schema.v2.ChatRequest.StatusH\x00\x88\x01\x01\x12$\n\x08messages\x18\x04 \x03(\x0b\x32\x12.schema.v2.Message\x12=\n\x0c\x63reated_from\x18\x05 \x01(\x0e\x32\".schema.v2.ChatRequest.CreatedFromH\x01\x88\x01\x01\x12\"\n\x04\x63hat\x18\x06 \x01(\x0b\x32\x0f.schema.v2.ChatH\x02\x88\x01\x01\"/\n\x06Status\x12\x0b\n\x07started\x10\x00\x12\x0e\n\ninprogress\x10\x01\x12\x08\n\x04\x64one\x10\x02\"(\n\x0b\x43reatedFrom\x12\r\n\tassistant\x10\x00\x12\n\n\x06plugin\x10\x01\x42\t\n\x07_statusB\x0f\n\r_created_fromB\x07\n\x05_chat\"C\n\x04\x43hat\x12.\n\x08metadata\x18\x01 \x01(\x0b\x32\x17.google.protobuf.StructH\x00\x88\x01\x01\x42\x0b\n\t_metadata\"\x8d\x06\n\x07Message\x12.\n\x06status\x18\x01 \x01(\x0e\x32\x19.schema.v2.Message.StatusH\x00\x88\x01\x01\x12;\n\tassistant\x18\x02 \x01(\x0e\x32#.schema.v2.Message.MessageAssistantH\x01\x88\x01\x01\x12\x31\n\x04\x66rom\x18\x03 \x01(\x0e\x32\x1e.schema.v2.Message.MessageFromH\x02\x88\x01\x01\x12\x14\n\x07\x63ontent\x18\x04 \x01(\tH\x03\x88\x01\x01\x12\x13\n\x06hidden\x18\x05 \x01(\x08H\x04\x88\x01\x01\x12.\n\x08metadata\x18\x06 \x01(\x0b\x32\x17.google.protobuf.StructH\x05\x88\x01\x01\x12\'\n\x06\x61ssets\x18\x07 \x03(\x0b\x32\x17.schema.v2.MessageAsset\x12&\n\tresources\x18\x08 \x03(\x0b\x32\x13.schema.v2.Resource\x12(\n\nreferences\x18\t \x03(\x0b\x32\x14.schema.v2.Reference\x12\x12\n\ncreated_at\x18\n \x01(\x05\x12\x11\n\x04uuid\x18\x0b \x01(\tH\x06\x88\x01\x01\x12\x17\n\x0fresources_count\x18\x0c \x01(\x05\"1\n\x06Status\x12\x0b\n\x07success\x10\x00\x12\x0e\n\ninprogress\x10\x01\x12\n\n\x06\x66\x61iled\x10\x02\"\x87\x01\n\x10MessageAssistant\x12\x0b\n\x07\x62\x61\x63kend\x10\x00\x12\x0c\n\x08\x66rontend\x10\x01\x12\x06\n\x02po\x10\x02\x12\x06\n\x02tm\x10\x03\x12\r\n\tdeveloper\x10\x04\x12\x0c\n\x08monorepo\x10\x05\x12\x17\n\x13\x66ullstack_developer\x10\x06\x12\x12\n\x0e\x61ssistant_role\x10\x07\"@\n\x0bMessageFrom\x12\n\n\x06system\x10\x00\x12\x06\n\x02\x61i\x10\x01\x12\t\n\x05human\x10\x02\x12\x12\n\x0e\x66rom_assistant\x10\x03\x42\t\n\x07_statusB\x0c\n\n_assistantB\x07\n\x05_fromB\n\n\x08_contentB\t\n\x07_hiddenB\x0b\n\t_metadataB\x07\n\x05_uuid\"\xb0\x03\n\x08Resource\x12\x11\n\x04name\x18\x01 \x01(\tH\x00\x88\x01\x01\x12\x14\n\x07\x63ontent\x18\x02 \x01(\tH\x01\x88\x01\x01\x12<\n\rresource_type\x18\x03 \x01(\x0e\x32 .schema.v2.Resource.ResourceTypeH\x02\x88\x01\x01\x12/\n\x06status\x18\x04 \x01(\x0e\x32\x1a.schema.v2.Resource.StatusH\x03\x88\x01\x01\x12\x15\n\x08\x63\x61tegory\x18\x05 \x01(\tH\x04\x88\x01\x01\x12.\n\x08metadata\x18\x06 \x01(\x0b\x32\x17.google.protobuf.StructH\x05\x88\x01\x01\"F\n\x06Status\x12\t\n\x05\x64raft\x10\x00\x12\t\n\x05ready\x10\x01\x12\x0e\n\ninprogress\x10\x02\x12\t\n\x05\x65rror\x10\x03\x12\x0b\n\x07success\x10\x04\"1\n\x0cResourceType\x12\x08\n\x04\x63ode\x10\x00\x12\x0c\n\x08\x64ocument\x10\x01\x12\t\n\x05image\x10\x02\x42\x07\n\x05_nameB\n\n\x08_contentB\x10\n\x0e_resource_typeB\t\n\x07_statusB\x0b\n\t_categoryB\x0b\n\t_metadata\"\xfa\x02\n\tReference\x12\x11\n\x04name\x18\x01 \x01(\tH\x00\x88\x01\x01\x12\x13\n\x06origin\x18\x02 \x01(\tH\x01\x88\x01\x01\x12?\n\x0ereference_type\x18\x03 \x01(\x0e\x32\".schema.v2.Reference.ReferenceTypeH\x02\x88\x01\x01\x12\x15\n\x08\x63\x61tegory\x18\x04 \x01(\tH\x03\x88\x01\x01\x12\x14\n\x07\x63ontent\x18\x05 \x01(\tH\x04\x88\x01\x01\x12.\n\x08metadata\x18\x06 \x01(\x0b\x32\x17.google.protobuf.StructH\x05\x88\x01\x01\"Z\n\rReferenceType\x12\x08\n\x04\x63ode\x10\x00\x12\x0b\n\x07usecase\x10\x01\x12\x12\n\x0e\x62usiness_logic\x10\x02\x12\x07\n\x03\x61pi\x10\x03\x12\n\n\x06ticket\x10\x04\x12\t\n\x05image\x10\x05\x42\x07\n\x05_nameB\t\n\x07_originB\x11\n\x0f_reference_typeB\x0b\n\t_categoryB\n\n\x08_contentB\x0b\n\t_metadata\"&\n\x0cMessageAsset\x12\x16\n\x0e\x62\x61se64_content\x18\x01 \x01(\t\"\x1a\n\x07Session\x12\x0f\n\x07user_id\x18\x01 \x01(\x05\x62\x06proto3"

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
    ["google.protobuf.Struct", "google/protobuf/struct.proto"],
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
    ChatRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ChatRequest").msgclass
    ChatRequest::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ChatRequest.Status").enummodule
    ChatRequest::CreatedFrom = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ChatRequest.CreatedFrom").enummodule
    Chat = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.Chat").msgclass
    Message = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.Message").msgclass
    Message::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.Message.Status").enummodule
    Message::MessageAssistant = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.Message.MessageAssistant").enummodule
    Message::MessageFrom = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.Message.MessageFrom").enummodule
    Resource = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.Resource").msgclass
    Resource::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.Resource.Status").enummodule
    Resource::ResourceType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.Resource.ResourceType").enummodule
    Reference = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.Reference").msgclass
    Reference::ReferenceType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.Reference.ReferenceType").enummodule
    MessageAsset = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.MessageAsset").msgclass
    Session = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.Session").msgclass
  end
end
