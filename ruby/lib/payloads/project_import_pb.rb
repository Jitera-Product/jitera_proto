# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: project_import.proto

require 'google/protobuf'


descriptor_data = "\n\x14project_import.proto\x12\tschema.v1\"h\n\x0fProjectAnalysis\x12\x19\n\x11project_import_id\x18\x01 \x01(\x05\x12\x0c\n\x04repo\x18\x02 \x01(\t\x12\r\n\x05owner\x18\x03 \x01(\t\x12\x0e\n\x06\x62ranch\x18\x04 \x01(\t\x12\r\n\x05token\x18\x05 \x01(\t\"\xe2\x02\n\x15ProjectAnalysisReport\x12\x19\n\x11project_import_id\x18\x01 \x01(\x05\x12=\n\x08progress\x18\x02 \x01(\x0b\x32).schema.v1.ProjectAnalysisReport.ProgressH\x00\x12\x37\n\x05\x65rror\x18\x03 \x01(\x0b\x32&.schema.v1.ProjectAnalysisReport.ErrorH\x00\x1aj\n\x08Progress\x12\x12\n\npercentage\x18\x01 \x01(\x02\x12\x0f\n\x07message\x18\x02 \x01(\t\x12\x39\n\x07payload\x18\x03 \x01(\x0b\x32(.schema.v1.ProjectAnalysisReport.Payload\x1a\x18\n\x05\x45rror\x12\x0f\n\x07message\x18\x01 \x01(\t\x1a\'\n\x07Payload\x12\x0c\n\x04\x64\x61ta\x18\x01 \x01(\t\x12\x0e\n\x06module\x18\x02 \x01(\tB\x07\n\x05stateb\x06proto3"

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
  module V1
    ProjectAnalysis = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ProjectAnalysis").msgclass
    ProjectAnalysisReport = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ProjectAnalysisReport").msgclass
    ProjectAnalysisReport::Progress = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ProjectAnalysisReport.Progress").msgclass
    ProjectAnalysisReport::Error = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ProjectAnalysisReport.Error").msgclass
    ProjectAnalysisReport::Payload = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ProjectAnalysisReport.Payload").msgclass
  end
end
