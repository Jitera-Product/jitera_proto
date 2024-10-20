# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/project_page_import.proto

require 'google/protobuf'

require 'google/protobuf/struct_pb'
require 'v2/project_source_pb'
require 'v2/browser_pb'


descriptor_data = "\n\x1cv2/project_page_import.proto\x12\tschema.v2\x1a\x1cgoogle/protobuf/struct.proto\x1a\x17v2/project_source.proto\x1a\x10v2/browser.proto\"\xd8\x01\n\x11ProjectPageImport\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x30\n\x0eproject_source\x18\x03 \x01(\x0b\x32\x18.schema.v2.ProjectSource\x12\x0b\n\x03url\x18\x04 \x01(\t\x12=\n\rstorage_state\x18\x05 \x01(\x0b\x32&.schema.v2.browser.BrowserStorageState\x12\x14\n\x0chandled_urls\x18\x06 \x03(\t\"\xd2\x02\n\x17ProjectImportPageAction\x12\x0c\n\x04uuid\x18\x01 \x01(\t\x12\x17\n\x0f\x61\x63tionable_type\x18\x02 \x01(\t\x12\x15\n\ractionable_id\x18\x03 \x01(\x05\x12\x0c\n\x04name\x18\x04 \x01(\t\x12\x0e\n\x06script\x18\x05 \x01(\t\x12\x13\n\x0b\x61\x63tion_type\x18\x06 \x01(\t\x12\x0b\n\x03url\x18\x07 \x01(\t\x12\x14\n\x0c\x64ynamic_path\x18\x08 \x01(\t\x12\x10\n\x08selector\x18\t \x01(\t\x12\'\n\x06inputs\x18\n \x01(\x0b\x32\x17.google.protobuf.Struct\x12\r\n\x05\x66iles\x18\x0b \x03(\t\x12\x13\n\x0b\x64\x65scription\x18\x0c \x01(\t\x12\x19\n\x11logic_description\x18\r \x01(\t\x12)\n\x08metadata\x18\x0e \x01(\x0b\x32\x17.google.protobuf.Struct\"\xb6\x03\n\x1aProjectImportPageComponent\x12\x0c\n\x04uuid\x18\x01 \x01(\t\x12\x1e\n\x16project_import_page_id\x18\x02 \x01(\x05\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x0c\n\x04html\x18\x04 \x01(\t\x12\x0e\n\x06script\x18\x05 \x01(\t\x12\x0e\n\x06parent\x18\x06 \x01(\t\x12\x12\n\nscreenshot\x18\x07 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x08 \x01(\t\x12\x19\n\x11logic_description\x18\t \x01(\t\x12%\n\x04size\x18\n \x01(\x0b\x32\x17.google.protobuf.Struct\x12)\n\x08position\x18\x0b \x01(\x0b\x32\x17.google.protobuf.Struct\x12)\n\x08\x65lements\x18\x0c \x01(\x0b\x32\x17.google.protobuf.Struct\x12\r\n\x05\x66iles\x18\r \x03(\t\x12)\n\x08metadata\x18\x0e \x01(\x0b\x32\x17.google.protobuf.Struct\x12\x33\n\x07\x61\x63tions\x18\x0f \x03(\x0b\x32\".schema.v2.ProjectImportPageAction\"\x97\x03\n\x11ProjectImportPage\x12\x0c\n\x04uuid\x18\x01 \x01(\t\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x19\n\x11project_source_id\x18\x03 \x01(\x05\x12\x0b\n\x03url\x18\x04 \x01(\t\x12\x0c\n\x04name\x18\x05 \x01(\t\x12\x0c\n\x04path\x18\x06 \x01(\t\x12\x12\n\nparent_url\x18\x07 \x01(\t\x12\x14\n\x0c\x64ynamic_path\x18\x08 \x01(\t\x12\x0c\n\x04html\x18\t \x01(\t\x12%\n\x04size\x18\n \x01(\x0b\x32\x17.google.protobuf.Struct\x12\r\n\x05\x66iles\x18\x0b \x03(\t\x12\x13\n\x0b\x64\x65scription\x18\x0c \x01(\t\x12)\n\x08metadata\x18\r \x01(\x0b\x32\x17.google.protobuf.Struct\x12\x33\n\x07\x61\x63tions\x18\x0e \x03(\x0b\x32\".schema.v2.ProjectImportPageAction\x12\x39\n\ncomponents\x18\x0f \x03(\x0b\x32%.schema.v2.ProjectImportPageComponent\"\xf5\x01\n\x19ProjectPageImportResponse\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12;\n\x06status\x18\x03 \x01(\x0e\x32+.schema.v2.ProjectPageImportResponse.Status\x12(\n\x07payload\x18\x04 \x01(\x0b\x32\x17.google.protobuf.Struct\"@\n\x06Status\x12\x0b\n\x07STARTED\x10\x00\x12\r\n\tSUCCEEDED\x10\x02\x12\x0e\n\nINPROGRESS\x10\x03\x12\n\n\x06\x46\x41ILED\x10\x04\x62\x06proto3"

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
    ["schema.v2.browser.BrowserStorageState", "v2/browser.proto"],
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
    ProjectPageImport = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectPageImport").msgclass
    ProjectImportPageAction = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectImportPageAction").msgclass
    ProjectImportPageComponent = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectImportPageComponent").msgclass
    ProjectImportPage = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectImportPage").msgclass
    ProjectPageImportResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectPageImportResponse").msgclass
    ProjectPageImportResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectPageImportResponse.Status").enummodule
  end
end
