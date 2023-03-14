# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/web_app.proto

require 'google/protobuf'

require 'google/protobuf/struct_pb'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("v1/web_app.proto", :syntax => :proto3) do
    add_message "schema.v1.WebApp" do
      repeated :app_pages, :message, 1, "schema.v1.AppPage"
      repeated :assets, :message, 2, "schema.v1.Asset"
      repeated :variables, :message, 3, "schema.v1.WebApp.Variable"
      repeated :categories, :message, 4, "schema.v1.AppPageCategory"
    end
    add_message "schema.v1.WebApp.Variable" do
      optional :type, :enum, 1, "schema.v1.WebApp.VariableType"
      optional :name, :string, 2
      optional :value, :string, 3
    end
    add_enum "schema.v1.WebApp.VariableType" do
      value :JS, 0
      value :CSS, 1
    end
    add_message "schema.v1.Asset" do
      optional :id, :string, 1
      optional :url, :string, 2
      optional :file_name, :string, 3
      optional :file_size, :int32, 4
      optional :content_type, :string, 5
    end
    add_message "schema.v1.AppPage" do
      optional :id, :string, 1
      optional :page_name, :string, 2
      optional :slug, :string, 3
      optional :page_type, :enum, 4, "schema.v1.AppPage.PageType"
      repeated :nodes, :message, 5, "schema.v1.PageNode"
      optional :category_id, :string, 6
    end
    add_enum "schema.v1.AppPage.PageType" do
      value :SCREEN, 0
      value :MOLECULE, 1
    end
    add_message "schema.v1.AppPageCategory" do
      optional :id, :string, 1
      optional :name, :string, 2
    end
    add_message "schema.v1.PageNode" do
      optional :id, :string, 1
      optional :display_name, :string, 2
      optional :name, :string, 3
      optional :parent, :string, 4
      repeated :nodes, :string, 5
      map :linked_nodes, :string, :string, 6
      optional :component_name, :string, 7
      optional :custom, :message, 8, "schema.v1.NodeCustom"
      oneof :props do
        optional :web_props, :message, 9, "schema.v1.WebNodeProps"
        optional :mobile_props, :message, 10, "schema.v1.MobileNodeProps"
      end
    end
    add_message "schema.v1.WebNodeProps" do
      optional :element_key, :string, 1
      proto3_optional :button_type, :string, 2
      proto3_optional :span, :string, 3
      proto3_optional :offset, :string, 4
      proto3_optional :push_prop, :string, 5
      proto3_optional :pull_prop, :string, 6
      proto3_optional :order, :string, 7
      repeated :gutter, :int32, 8
      proto3_optional :wrap, :string, 9
      proto3_optional :justify, :string, 10
      proto3_optional :align, :string, 11
      proto3_optional :pin_count, :int32, 12
      proto3_optional :auto_focus, :bool, 13
      proto3_optional :otp_input_type, :string, 14
      proto3_optional :icon_name, :string, 15
      proto3_optional :icon_position, :string, 16
      proto3_optional :color, :string, 17
      proto3_optional :active_color, :string, 18
      proto3_optional :inactive_color, :string, 19
      proto3_optional :check_color, :string, 20
      proto3_optional :direction, :string, 21
      proto3_optional :size, :string, 22
      proto3_optional :label, :string, 23
      proto3_optional :date_mode, :string, 24
      proto3_optional :date_format, :string, 25
      proto3_optional :week_format, :string, 26
      proto3_optional :month_format, :string, 27
      proto3_optional :time_format, :string, 28
      proto3_optional :mode, :string, 29
      proto3_optional :space_between, :int32, 30
      proto3_optional :is_required_authentication, :bool, 31
      proto3_optional :redirect_url, :string, 32
      proto3_optional :flex, :string, 33
      proto3_optional :source_type, :string, 34
      proto3_optional :is_password_field, :bool, 35
      proto3_optional :align_items, :string, 36
      proto3_optional :justify_content, :string, 37
      proto3_optional :xs, :int32, 38
      proto3_optional :sm, :int32, 39
      proto3_optional :md, :int32, 40
      proto3_optional :lg, :int32, 41
      proto3_optional :xl, :int32, 42
      proto3_optional :xxl, :int32, 43
      proto3_optional :grid, :message, 44, "google.protobuf.Struct"
      proto3_optional :xl_responsive, :message, 45, "google.protobuf.Struct"
      proto3_optional :md_responsive, :message, 46, "google.protobuf.Struct"
      proto3_optional :xs_responsive, :message, 47, "google.protobuf.Struct"
      proto3_optional :picker, :string, 48
      proto3_optional :show_time, :bool, 49
      proto3_optional :format, :string, 50
      proto3_optional :disabled_overflow, :bool, 51
      proto3_optional :multiple, :bool, 52
      proto3_optional :max_count, :int32, 53
      proto3_optional :placement, :string, 54
      proto3_optional :width, :int32, 55
      proto3_optional :closable, :bool, 56
      proto3_optional :header_visible, :bool, 57
      proto3_optional :type, :string, 58
      proto3_optional :text_type, :string, 59
      proto3_optional :slides_to_show, :int32, 60
      proto3_optional :variable_width, :bool, 61
      proto3_optional :infinity, :bool, 62
      proto3_optional :infinite, :bool, 63
      proto3_optional :centered, :bool, 64
      proto3_optional :tab_position, :string, 65
      proto3_optional :tabs, :message, 66, "google.protobuf.Struct"
      proto3_optional :tab_label_style, :message, 67, "google.protobuf.Struct"
      proto3_optional :default_active_key, :string, 68
      proto3_optional :is_header_visible, :bool, 69
      proto3_optional :is_footer_visible, :bool, 70
      proto3_optional :is_data_sortable, :bool, 71
      proto3_optional :is_pagination_enabled, :bool, 72
      proto3_optional :pagination_position, :string, 73
      proto3_optional :page_size, :int32, 74
      proto3_optional :body_style, :message, 75, "google.protobuf.Struct"
      proto3_optional :placeholder_style, :message, 76, "google.protobuf.Struct"
      proto3_optional :container_style, :message, 77, "google.protobuf.Struct"
      proto3_optional :dropdown_style, :message, 78, "google.protobuf.Struct"
      proto3_optional :option_style, :message, 79, "google.protobuf.Struct"
      proto3_optional :cell_style, :message, 80, "google.protobuf.Struct"
      proto3_optional :cell_text_style, :message, 81, "google.protobuf.Struct"
      proto3_optional :style, :message, 82, "google.protobuf.Struct"
      proto3_optional :button_style, :message, 83, "google.protobuf.Struct"
      proto3_optional :header_style, :message, 84, "google.protobuf.Struct"
      proto3_optional :wrapper_style, :message, 85, "google.protobuf.Struct"
      proto3_optional :table_style, :message, 86, "google.protobuf.Struct"
      proto3_optional :header_row_style, :message, 87, "google.protobuf.Struct"
      proto3_optional :header_column_style, :message, 88, "google.protobuf.Struct"
      proto3_optional :body_row_style, :message, 89, "google.protobuf.Struct"
      proto3_optional :body_column_style, :message, 90, "google.protobuf.Struct"
      proto3_optional :sort_column_style, :message, 91, "google.protobuf.Struct"
      proto3_optional :footer_row_style, :message, 92, "google.protobuf.Struct"
      proto3_optional :footer_column_style, :message, 93, "google.protobuf.Struct"
      proto3_optional :pagination_wrapper_style, :message, 94, "google.protobuf.Struct"
      proto3_optional :label_style, :message, 95, "google.protobuf.Struct"
      proto3_optional :input_style, :message, 96, "google.protobuf.Struct"
      proto3_optional :ascending_icon_props, :message, 97, "schema.v1.WebNodeProps"
      proto3_optional :descending_icon_props, :message, 98, "schema.v1.WebNodeProps"
      proto3_optional :icon_props, :message, 99, "schema.v1.WebNodeProps"
      proto3_optional :drawer_props, :message, 100, "schema.v1.WebNodeProps"
      proto3_optional :button_props, :message, 101, "schema.v1.WebNodeProps"
      proto3_optional :prefix_icon_props, :message, 102, "schema.v1.WebNodeProps"
      proto3_optional :suffix_icon_props, :message, 103, "schema.v1.WebNodeProps"
      proto3_optional :render_item, :message, 109, "schema.v1.RenderMolecule"
      proto3_optional :header, :message, 110, "schema.v1.MoleculeComponent"
      proto3_optional :footer, :message, 111, "schema.v1.MoleculeComponent"
      repeated :drawer_title, :message, 112, "schema.v1.NodeVariable"
      repeated :placeholder, :message, 113, "schema.v1.NodeVariable"
      repeated :input_label, :message, 114, "schema.v1.NodeVariable"
      repeated :href, :message, 115, "schema.v1.NodeVariable"
      repeated :action, :message, 116, "schema.v1.NodeVariable"
      repeated :data, :message, 117, "schema.v1.NodeVariable"
      repeated :total_page, :message, 118, "schema.v1.NodeVariable"
      repeated :default_value, :message, 119, "schema.v1.NodeVariable"
      repeated :source, :message, 120, "schema.v1.NodeVariable"
      repeated :title, :message, 121, "schema.v1.NodeVariable"
      repeated :children_data, :message, 122, "schema.v1.NodeVariable"
      repeated :responsive_visibility, :message, 123, "schema.v1.NodeVariable"
      repeated :data_source, :message, 124, "schema.v1.NodeVariable"
      repeated :table_columns, :message, 125, "schema.v1.WebNodeProps.TableColumn"
      repeated :table_actions, :message, 126, "schema.v1.WebNodeProps.TableColumn"
      repeated :on_pagination_change, :message, 127, "schema.v1.NodeAction"
      repeated :on_data_sorting_change, :message, 128, "schema.v1.NodeAction"
    end
    add_message "schema.v1.WebNodeProps.TableColumn" do
      optional :molecule, :message, 1, "schema.v1.RenderMolecule"
      optional :sortable, :bool, 2
      optional :filterable, :bool, 3
      optional :column_index, :int32, 4
      repeated :column_name, :message, 5, "google.protobuf.Struct"
      repeated :column_path, :message, 6, "google.protobuf.Struct"
    end
    add_message "schema.v1.MobileNodeProps" do
      optional :element_key, :string, 1
      proto3_optional :background_color, :string, 2
      proto3_optional :safe_area, :string, 3
      proto3_optional :placeholder_text_color, :string, 4
      proto3_optional :secure_text_entry, :bool, 5
      proto3_optional :auto_correct, :bool, 6
      proto3_optional :show_clear_text, :bool, 7
      proto3_optional :show_character_counter, :bool, 8
      proto3_optional :max_length, :int32, 9
      proto3_optional :clear_icon_color, :string, 10
      proto3_optional :secure_eye_icon_color, :string, 11
      proto3_optional :editable, :bool, 12
      proto3_optional :number_of_lines, :int32, 13
      proto3_optional :vertical, :bool, 14
      proto3_optional :loop, :bool, 15
      proto3_optional :timeout, :int32, 16
      proto3_optional :horizontal, :bool, 17
      proto3_optional :num_columns, :int32, 18
      proto3_optional :source_type, :string, 19
      proto3_optional :use_default_back_button, :bool, 20
      proto3_optional :auto_focus, :bool, 21
      proto3_optional :pin_count, :int32, 22
      proto3_optional :position, :string, 23
      proto3_optional :return_key_type, :string, 24
      proto3_optional :resize_mode, :string, 25
      proto3_optional :keyboard_type, :string, 26
      proto3_optional :auto_capitalize, :string, 27
      proto3_optional :date_mode, :string, 28
      proto3_optional :mode, :string, 29
      proto3_optional :infinity, :bool, 30
      proto3_optional :inverted, :bool, 31
      proto3_optional :name, :string, 32
      proto3_optional :size, :int32, 33
      proto3_optional :color, :string, 34
      proto3_optional :type, :string, 35
      proto3_optional :left_icon_name, :string, 36
      proto3_optional :left_icon_type, :string, 37
      proto3_optional :left_icon_size, :int32, 38
      proto3_optional :left_icon_color, :string, 39
      proto3_optional :right_icon_name, :string, 40
      proto3_optional :right_icon_type, :string, 41
      proto3_optional :right_icon_size, :int32, 42
      proto3_optional :right_icon_color, :string, 43
      proto3_optional :launcher_type, :string, 44
      proto3_optional :otp_input_type, :string, 45
      proto3_optional :border_bottom_width, :float, 46
      proto3_optional :border_bottom_color, :string, 47
      proto3_optional :style, :message, 48, "google.protobuf.Struct"
      proto3_optional :content_container_style, :message, 49, "google.protobuf.Struct"
      proto3_optional :input_style, :message, 50, "google.protobuf.Struct"
      proto3_optional :label_style, :message, 51, "google.protobuf.Struct"
      proto3_optional :character_counter_style, :message, 52, "google.protobuf.Struct"
      proto3_optional :cell_style, :message, 53, "google.protobuf.Struct"
      proto3_optional :cell_text_style, :message, 54, "google.protobuf.Struct"
      proto3_optional :title_style, :message, 55, "google.protobuf.Struct"
      proto3_optional :render_item, :message, 56, "schema.v1.RenderMolecule"
      proto3_optional :preview, :message, 57, "schema.v1.RenderMolecule"
      proto3_optional :component, :message, 58, "schema.v1.RenderMolecule"
      proto3_optional :list_empty_component, :message, 59, "schema.v1.MoleculeComponent"
      proto3_optional :list_header_component, :message, 60, "schema.v1.MoleculeComponent"
      proto3_optional :list_footer_component, :message, 61, "schema.v1.MoleculeComponent"
      proto3_optional :item_separator_component, :message, 62, "schema.v1.MoleculeComponent"
      proto3_optional :key_extractor, :message, 63, "schema.v1.NodeReference"
      repeated :placeholder, :message, 64, "schema.v1.NodeVariable"
      repeated :data, :message, 65, "schema.v1.NodeVariable"
      repeated :source, :message, 66, "schema.v1.NodeVariable"
      repeated :title, :message, 67, "schema.v1.NodeVariable"
      repeated :children_data, :message, 68, "schema.v1.NodeVariable"
    end
    add_message "schema.v1.RenderMolecule" do
      proto3_optional :reference, :message, 1, "schema.v1.NodeReference"
      repeated :arguments, :message, 2, "schema.v1.FunctionArgument"
      repeated :props, :message, 3, "schema.v1.NodeParam"
    end
    add_message "schema.v1.NodeReference" do
      optional :name, :string, 1
      optional :ref_id, :string, 2
      optional :ref_data, :message, 3, "google.protobuf.Struct"
      optional :value, :string, 4
      optional :ref_type, :enum, 5, "schema.v1.NodeReference.ReferenceRefType"
    end
    add_enum "schema.v1.NodeReference.ReferenceRefType" do
      value :NONE, 0
      value :API_REQUEST, 1
      value :API_REQUEST_PARAM, 2
      value :API_BUSINESS_PROCESS, 3
      value :API_RESPONSE_DATA, 4
      value :COLUMN_DEFINITION, 5
      value :MOBILE_APP_ASSET, 6
      value :MOBILE_APP_PAGE, 7
      value :MOBILE_APP_PAGE_ACTION, 8
      value :MOBILE_APP_PAGE_NODE, 9
      value :MOBILE_APP_PAGE_PARAM, 10
      value :MOBILE_APP_PAGE_FORM, 11
      value :MOBILE_NAVIGATION, 12
      value :MOBILE_NAVIGATION_NODE, 13
      value :MOBILE_MOLECULE_PROP, 14
      value :TABLE_DEFINITION, 15
      value :PROJECT_VARIABLE, 16
    end
    add_message "schema.v1.FunctionArgument" do
      optional :name, :string, 1
      optional :argument_type, :string, 2
      optional :plural, :bool, 3
      optional :reference, :message, 4, "schema.v1.NodeReference"
    end
    add_message "schema.v1.NodeParam" do
      optional :name, :string, 1
      optional :param_type, :string, 2
      repeated :param_type_enum, :string, 3
      optional :default_value, :string, 4
      optional :plural, :bool, 5
      optional :automated, :bool, 6
      optional :reference, :message, 7, "schema.v1.NodeReference"
      optional :value, :message, 8, "schema.v1.NodeVariable"
      repeated :actions, :message, 9, "schema.v1.NodeAction"
      repeated :function_arguments, :message, 10, "schema.v1.FunctionArgument"
    end
    add_message "schema.v1.NodeVariable" do
      optional :local_id, :string, 1
      optional :name, :string, 2
      optional :value, :string, 3
      optional :value_path, :string, 4
      optional :default_value, :string, 5
      optional :value_type, :string, 6
      optional :default_type, :enum, 7, "schema.v1.NodeVariable.VariableDefaultType"
      optional :source, :enum, 8, "schema.v1.NodeVariable.VariableSource"
      optional :variable_type, :enum, 9, "schema.v1.NodeVariable.VariableType"
      repeated :values, :message, 10, "schema.v1.NodeReference"
    end
    add_enum "schema.v1.NodeVariable.VariableDefaultType" do
      value :STRING, 0
      value :VARIABLE, 1
    end
    add_enum "schema.v1.NodeVariable.VariableSource" do
      value :PARAMS, 0
      value :FORM_VALUES, 1
      value :ACTION_RESPONSE, 2
      value :STORAGE, 3
      value :AUTHENTICATED_USER, 4
      value :MOLECULE_PROPS, 5
      value :PROJECT_ASSET, 6
      value :CONTEXT_VALUES, 7
      value :LOCAL_CONTEXT_RESPONSE, 8
      value :FORM_VALIDATION_ERROR_MESSAGE, 9
      value :CSS_VARIABLE, 10
    end
    add_enum "schema.v1.NodeVariable.VariableType" do
      value :STATIC, 0
      value :DYNAMIC, 1
    end
    add_message "schema.v1.NodeAction" do
      optional :action, :string, 1
      optional :value, :string, 2
      optional :action_type, :enum, 3, "schema.v1.NodeAction.ActionType"
      optional :source, :enum, 4, "schema.v1.NodeAction.ActionSource"
      repeated :payload, :message, 5, "schema.v1.NodePayload"
      repeated :response, :message, 6, "schema.v1.NodePayload"
      repeated :values, :message, 7, "schema.v1.NodeReference"
      repeated :success_actions, :message, 8, "schema.v1.NodeAction"
      repeated :error_actions, :message, 9, "schema.v1.NodeAction"
    end
    add_enum "schema.v1.NodeAction.ActionType" do
      value :API, 0
      value :GENERAL, 1
    end
    add_enum "schema.v1.NodeAction.ActionSource" do
      value :AUTHENTICATION, 0
      value :BACKEND_CALL, 1
      value :FORM_SUBMIT, 2
      value :NAVIGATION, 3
      value :SHOW_TOAST_MESSAGE, 4
      value :MOLECULE_PROPS, 5
      value :MODAL, 6
      value :EVENT_LOG, 7
      value :REQUEST_NOTIFICATION_PERMISSION, 8
      value :DRAWER, 9
    end
    add_message "schema.v1.NodePayload" do
      optional :value, :message, 1, "schema.v1.NodeVariable"
      optional :reference, :message, 2, "schema.v1.NodeReference"
      repeated :actions, :message, 3, "schema.v1.NodeAction"
    end
    add_message "schema.v1.MoleculeComponent" do
      optional :reference, :message, 1, "schema.v1.NodeReference"
      repeated :props, :message, 2, "schema.v1.NodeParam"
    end
    add_message "schema.v1.NodeCustom" do
      proto3_optional :use_prop_style, :bool, 1
      proto3_optional :ignore_prop_style, :bool, 2
      proto3_optional :form, :message, 3, "schema.v1.NodeReference"
      proto3_optional :molecule, :message, 4, "schema.v1.NodeReference"
      repeated :media_queries, :message, 5, "schema.v1.NodeMediaQuery"
      proto3_optional :authentication, :message, 6, "schema.v1.NodeReference"
      proto3_optional :render_condition, :message, 7, "schema.v1.RenderCondition"
      repeated :seo_title, :message, 8, "schema.v1.NodeVariable"
      repeated :seo_description, :message, 9, "schema.v1.NodeVariable"
      repeated :actions, :message, 10, "schema.v1.NodeAction"
      repeated :params, :message, 11, "schema.v1.NodeParam"
      repeated :props, :message, 12, "schema.v1.NodeParam"
      repeated :children_data, :message, 13, "schema.v1.NodeVariable"
      repeated :form_validations, :message, 14, "schema.v1.FormValidation"
      repeated :form_default_values, :message, 15, "schema.v1.FormDefaultValue"
    end
    add_message "schema.v1.FormDefaultValue" do
      optional :reference, :message, 1, "schema.v1.NodeReference"
      optional :value, :message, 2, "schema.v1.NodeVariable"
    end
    add_message "schema.v1.NodeMediaQuery" do
      optional :lower, :int32, 1
      optional :upper, :int32, 2
      optional :style, :message, 3, "google.protobuf.Struct"
    end
    add_message "schema.v1.RenderCondition" do
      optional :enabled, :bool, 1
      repeated :conditions, :message, 2, "schema.v1.RenderCondition.Condition"
    end
    add_message "schema.v1.RenderCondition.Condition" do
      optional :source, :enum, 1, "schema.v1.RenderCondition.Source"
      optional :operator, :enum, 2, "schema.v1.RenderCondition.Operator"
      optional :left, :message, 3, "schema.v1.NodeVariable"
      optional :right, :message, 4, "schema.v1.NodeVariable"
    end
    add_enum "schema.v1.RenderCondition.Source" do
      value :BINARY, 0
      value :GLOBAL, 1
    end
    add_enum "schema.v1.RenderCondition.Operator" do
      value :LESS_THAN, 0
      value :LESS_EQUAL_THAN, 1
      value :EQUAL, 2
      value :NOT_EQUAL, 3
      value :GREATER_THAN, 4
      value :GREATER_EQUAL_THAN, 5
      value :EXIST, 6
      value :NOT_EXIST, 7
    end
    add_message "schema.v1.FormValidation" do
      optional :validation_type, :enum, 1, "schema.v1.FormValidation.ValidationType"
      repeated :validation_rules, :message, 2, "schema.v1.FormValidation.FormValidationsRule"
    end
    add_message "schema.v1.FormValidation.FormValidationsRule" do
      optional :value, :string, 1
      optional :value_type, :string, 2
      repeated :error_messages, :message, 3, "schema.v1.NodeVariable"
    end
    add_enum "schema.v1.FormValidation.ValidationType" do
      value :TEXT, 0
      value :NUMBER, 1
      value :EMAIL, 2
      value :PASSWORD, 3
      value :PHONE_NUMBER, 4
    end
    add_enum "schema.v1.FormValidation.RuleType" do
      value :REQUIRED, 0
      value :MAXIMUM, 1
      value :MINIMUM, 2
      value :REGEX, 3
    end
  end
end

module Schema
  module V1
    WebApp = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.WebApp").msgclass
    WebApp::Variable = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.WebApp.Variable").msgclass
    WebApp::VariableType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.WebApp.VariableType").enummodule
    Asset = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.Asset").msgclass
    AppPage = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.AppPage").msgclass
    AppPage::PageType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.AppPage.PageType").enummodule
    AppPageCategory = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.AppPageCategory").msgclass
    PageNode = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.PageNode").msgclass
    WebNodeProps = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.WebNodeProps").msgclass
    WebNodeProps::TableColumn = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.WebNodeProps.TableColumn").msgclass
    MobileNodeProps = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.MobileNodeProps").msgclass
    RenderMolecule = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.RenderMolecule").msgclass
    NodeReference = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.NodeReference").msgclass
    NodeReference::ReferenceRefType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.NodeReference.ReferenceRefType").enummodule
    FunctionArgument = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.FunctionArgument").msgclass
    NodeParam = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.NodeParam").msgclass
    NodeVariable = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.NodeVariable").msgclass
    NodeVariable::VariableDefaultType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.NodeVariable.VariableDefaultType").enummodule
    NodeVariable::VariableSource = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.NodeVariable.VariableSource").enummodule
    NodeVariable::VariableType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.NodeVariable.VariableType").enummodule
    NodeAction = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.NodeAction").msgclass
    NodeAction::ActionType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.NodeAction.ActionType").enummodule
    NodeAction::ActionSource = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.NodeAction.ActionSource").enummodule
    NodePayload = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.NodePayload").msgclass
    MoleculeComponent = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.MoleculeComponent").msgclass
    NodeCustom = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.NodeCustom").msgclass
    FormDefaultValue = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.FormDefaultValue").msgclass
    NodeMediaQuery = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.NodeMediaQuery").msgclass
    RenderCondition = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.RenderCondition").msgclass
    RenderCondition::Condition = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.RenderCondition.Condition").msgclass
    RenderCondition::Source = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.RenderCondition.Source").enummodule
    RenderCondition::Operator = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.RenderCondition.Operator").enummodule
    FormValidation = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.FormValidation").msgclass
    FormValidation::FormValidationsRule = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.FormValidation.FormValidationsRule").msgclass
    FormValidation::ValidationType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.FormValidation.ValidationType").enummodule
    FormValidation::RuleType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.FormValidation.RuleType").enummodule
  end
end
