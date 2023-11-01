# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: v1/payloads.proto for package 'schema.v1'

require 'grpc'

module Schema
  module V1
    module CoreService
      class Service

        include ::GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'schema.v1.CoreService'

        rpc :ListTables, ::Schema::V1::ListTablesRequest, ::Schema::V1::ListTablesResponse
        rpc :ListControllers, ::Schema::V1::ListControllersRequest, ::Schema::V1::ListControllersResponse
        rpc :ListFeatures, ::Schema::V1::ListFeaturesRequest, ::Schema::V1::ListFeaturesResponse
        rpc :ListAuthorizations, ::Schema::V1::ListAuthorizationsRequest, ::Schema::V1::ListAuthorizationsResponse
        rpc :ListBeLocalizations, ::Schema::V1::ListLocalizationsRequest, ::Schema::V1::ListLocalizationsResponse
        rpc :ListFeLocalizations, ::Schema::V1::ListLocalizationsRequest, ::Schema::V1::ListLocalizationsResponse
        rpc :ListMigrations, ::Schema::V1::ListMigrationsRequest, ::Schema::V1::ListMigrationsResponse
        rpc :GetBackend, ::Schema::V1::GetBackendRequest, ::Schema::V1::GetBackendResponse
        rpc :GetWebApp, ::Schema::V1::GetWebAppRequest, ::Schema::V1::GetWebAppResponse
        rpc :GetGitAccessToken, ::Schema::V1::GetGitAccessTokenRequest, ::Schema::V1::GetGitAccessTokenResponse
      end

      Stub = Service.rpc_stub_class
    end
  end
end
