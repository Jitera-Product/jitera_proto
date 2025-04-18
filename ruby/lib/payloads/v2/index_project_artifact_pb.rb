# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/index_project_artifact.proto

require 'google/protobuf'

descriptor_data = "\n\x1fv2/index_project_artifact.proto\x12\tschema.v2\x1a\x17v2/project_source.proto\"\x98\x04\n\x1bIndexProjectArtifactRequest\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x30\n\x0eproject_source\x18\x02 \x01(\x0b\x32\x18.schema.v2.ProjectSource\x12R\n\x10reindex_document\x18\x03 \x01(\x0b\x32\x36.schema.v2.IndexProjectArtifactRequest.ReIndexDocumentH\x00\x12W\n\x13reindex_source_code\x18\x04 \x01(\x0b\x32\x38.schema.v2.IndexProjectArtifactRequest.ReIndexSourceCodeH\x00\x1a\x80\x01\n\x0fReIndexDocument\x12\x13\n\tindex_all\x18\x01 \x01(\x08H\x00\x12N\n\x0e\x64ocument_paths\x18\x02 \x01(\x0b\x32\x34.schema.v2.IndexProjectArtifactRequest.DocumentPathsH\x00\x42\x08\n\x06target\x1a\x1e\n\rDocumentPaths\x12\r\n\x05paths\x18\x01 \x03(\t\x1aM\n\x11ReIndexSourceCode\x12\x1d\n\x03git\x18\x01 \x01(\x0b\x32\x0e.schema.v2.GitH\x00\x12\x0f\n\x05local\x18\x02 \x01(\x08H\x00\x42\x08\n\x06sourceB\x0b\n\toperation\"\x94\x05\n\x1cIndexProjectArtifactResponse\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x44\n\x08progress\x18\x05 \x01(\x0b\x32\x30.schema.v2.IndexProjectArtifactResponse.ProgressH\x00\x12\x42\n\x07success\x18\x06 \x01(\x0b\x32/.schema.v2.IndexProjectArtifactResponse.SuccessH\x00\x12>\n\x05\x65rror\x18\x07 \x01(\x0b\x32-.schema.v2.IndexProjectArtifactResponse.ErrorH\x00\x1a-\n\x08Progress\x12\x10\n\x08progress\x18\x01 \x01(\x05\x12\x0f\n\x07message\x18\x02 \x01(\t\x1a\xa3\x01\n\x05\x45rror\x12\x0c\n\x04\x63ode\x18\x01 \x01(\t\x12\x0f\n\x07message\x18\x02 \x01(\t\x12K\n\x07\x64\x65tails\x18\x03 \x03(\x0b\x32:.schema.v2.IndexProjectArtifactResponse.Error.DetailsEntry\x1a.\n\x0c\x44\x65tailsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x1a\x99\x01\n\x07Success\x12\x0f\n\x07message\x18\x01 \x01(\t\x12M\n\x07results\x18\x02 \x03(\x0b\x32<.schema.v2.IndexProjectArtifactResponse.Success.ResultsEntry\x1a.\n\x0cResultsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x42\x08\n\x06statusb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool
pool.add_serialized_file(descriptor_data)

module Schema
  module V2
    IndexProjectArtifactRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexProjectArtifactRequest").msgclass
    IndexProjectArtifactRequest::ReIndexDocument = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexProjectArtifactRequest.ReIndexDocument").msgclass
    IndexProjectArtifactRequest::DocumentPaths = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexProjectArtifactRequest.DocumentPaths").msgclass
    IndexProjectArtifactRequest::ReIndexSourceCode = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexProjectArtifactRequest.ReIndexSourceCode").msgclass
    IndexProjectArtifactResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexProjectArtifactResponse").msgclass
    IndexProjectArtifactResponse::Progress = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexProjectArtifactResponse.Progress").msgclass
    IndexProjectArtifactResponse::Error = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexProjectArtifactResponse.Error").msgclass
    IndexProjectArtifactResponse::Success = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexProjectArtifactResponse.Success").msgclass
  end
end
