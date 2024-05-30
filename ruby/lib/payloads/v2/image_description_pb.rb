# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/image_description.proto

require 'google/protobuf'

descriptor_data = "\n\x1av2/image_description.proto\x12\tschema.v2\x1a v2/component_specification.proto\"\xde\x02\n\x19ImageToDescriptionRequest\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12:\n\x06images\x18\x03 \x03(\x0b\x32*.schema.v2.ImageToDescriptionRequest.Image\x1a\x87\x01\n\x05Image\x12\n\n\x02id\x18\x01 \x01(\t\x12\x13\n\x0bsource_type\x18\x02 \x01(\t\x12\x0b\n\x03url\x18\x03 \x01(\t\x12\x0c\n\x04html\x18\x04 \x01(\t\x12\x42\n\nfigma_node\x18\x05 \x01(\x0b\x32..schema.v2.ImageToDescriptionRequest.FigmaNode\x1a\x44\n\tFigmaNode\x12\x0f\n\x07node_id\x18\x01 \x01(\t\x12\x10\n\x08\x66ile_key\x18\x02 \x01(\t\x12\x14\n\x0c\x61\x63\x63\x65ss_token\x18\x03 \x01(\t\"\xb4\x03\n\x1aImageToDescriptionResponse\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12<\n\x06status\x18\x03 \x01(\x0e\x32,.schema.v2.ImageToDescriptionResponse.Status\x12;\n\x06images\x18\x04 \x03(\x0b\x32+.schema.v2.ImageToDescriptionResponse.Image\x12\x13\n\x0btoken_usage\x18\x05 \x01(\x05\x12\x15\n\rerror_message\x18\x06 \x01(\t\x1a\x82\x01\n\x05Image\x12\n\n\x02id\x18\x01 \x01(\t\x12\x13\n\x0bsource_type\x18\x02 \x01(\t\x12\x43\n\x18\x63omponent_specifications\x18\x03 \x03(\x0b\x32!.schema.v2.ComponentSpecification\x12\x13\n\x0bimage_width\x18\x04 \x01(\x05\"3\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0e\n\nINPROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x62\x06proto3"

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
    ["schema.v2.ComponentSpecification", "v2/component_specification.proto"],
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
    ImageToDescriptionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ImageToDescriptionRequest").msgclass
    ImageToDescriptionRequest::Image = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ImageToDescriptionRequest.Image").msgclass
    ImageToDescriptionRequest::FigmaNode = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ImageToDescriptionRequest.FigmaNode").msgclass
    ImageToDescriptionResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ImageToDescriptionResponse").msgclass
    ImageToDescriptionResponse::Image = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ImageToDescriptionResponse.Image").msgclass
    ImageToDescriptionResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ImageToDescriptionResponse.Status").enummodule
  end
end