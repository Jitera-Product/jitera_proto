# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/service.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("v1/service.proto", :syntax => :proto3) do
    add_message "schema.v1.GetWebAppRequest" do
      optional :project_id, :int32, 1
    end
    add_message "schema.v1.GetWebAppResponse" do
      optional :web_app, :message, 1, "schema.v1.WebApp"
    end
    add_message "schema.v1.GetBackendRequest" do
      optional :project_id, :int32, 1
    end
    add_message "schema.v1.GetBackendResponse" do
      optional :backend, :message, 1, "schema.v1.Backend"
    end
    add_message "schema.v1.ListTablesRequest" do
      optional :project_id, :int32, 1
    end
    add_message "schema.v1.ListTablesResponse" do
      repeated :tables, :message, 1, "schema.v1.Table"
    end
    add_message "schema.v1.ListMigrationsRequest" do
      optional :project_id, :int32, 1
    end
    add_message "schema.v1.ListControllersRequest" do
      optional :project_id, :int32, 1
    end
    add_message "schema.v1.ListControllersResponse" do
      repeated :controllers, :message, 1, "schema.v1.Controller"
    end
    add_message "schema.v1.ListFeaturesRequest" do
      optional :project_id, :int32, 1
    end
    add_message "schema.v1.ListFeaturesResponse" do
      repeated :features, :message, 1, "schema.v1.Feature"
    end
    add_message "schema.v1.ListAuthorizationsRequest" do
      optional :project_id, :int32, 1
    end
    add_message "schema.v1.ListAuthorizationsResponse" do
      repeated :authorizations, :message, 1, "schema.v1.Authorization"
    end
    add_message "schema.v1.ListLocalizationsRequest" do
      optional :project_id, :int32, 1
    end
    add_message "schema.v1.ListLocalizationsResponse" do
      repeated :localizations, :message, 1, "schema.v1.Localization"
    end
    add_message "schema.v1.ListMigrationsResponse" do
      repeated :migrations, :message, 1, "schema.v1.Migration"
    end
  end
end

module Schema
  module V1
    GetWebAppRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.GetWebAppRequest").msgclass
    GetWebAppResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.GetWebAppResponse").msgclass
    GetBackendRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.GetBackendRequest").msgclass
    GetBackendResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.GetBackendResponse").msgclass
    ListTablesRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ListTablesRequest").msgclass
    ListTablesResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ListTablesResponse").msgclass
    ListMigrationsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ListMigrationsRequest").msgclass
    ListControllersRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ListControllersRequest").msgclass
    ListControllersResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ListControllersResponse").msgclass
    ListFeaturesRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ListFeaturesRequest").msgclass
    ListFeaturesResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ListFeaturesResponse").msgclass
    ListAuthorizationsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ListAuthorizationsRequest").msgclass
    ListAuthorizationsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ListAuthorizationsResponse").msgclass
    ListLocalizationsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ListLocalizationsRequest").msgclass
    ListLocalizationsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ListLocalizationsResponse").msgclass
    ListMigrationsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.ListMigrationsResponse").msgclass
  end
end
