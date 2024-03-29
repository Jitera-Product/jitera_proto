<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1\Controller;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Controller.AuthorizationCondition</code>
 */
class AuthorizationCondition extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string column_definition_name = 1;</code>
     */
    protected $column_definition_name = '';
    /**
     * Generated from protobuf field <code>string column_definition_display_name = 2;</code>
     */
    protected $column_definition_display_name = '';
    /**
     * Generated from protobuf field <code>.schema.v1.Controller.AuthorizationCondition.JoiningCondition joining_condition = 3;</code>
     */
    protected $joining_condition = 0;
    /**
     * Generated from protobuf field <code>.schema.v1.Controller.AuthorizationCondition.Query query = 4;</code>
     */
    protected $query = 0;
    /**
     * Generated from protobuf field <code>string default_value = 5;</code>
     */
    protected $default_value = '';
    /**
     * Generated from protobuf field <code>string authentication_class = 6;</code>
     */
    protected $authentication_class = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $column_definition_name
     *     @type string $column_definition_display_name
     *     @type int $joining_condition
     *     @type int $query
     *     @type string $default_value
     *     @type string $authentication_class
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string column_definition_name = 1;</code>
     * @return string
     */
    public function getColumnDefinitionName()
    {
        return $this->column_definition_name;
    }

    /**
     * Generated from protobuf field <code>string column_definition_name = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setColumnDefinitionName($var)
    {
        GPBUtil::checkString($var, True);
        $this->column_definition_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string column_definition_display_name = 2;</code>
     * @return string
     */
    public function getColumnDefinitionDisplayName()
    {
        return $this->column_definition_display_name;
    }

    /**
     * Generated from protobuf field <code>string column_definition_display_name = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setColumnDefinitionDisplayName($var)
    {
        GPBUtil::checkString($var, True);
        $this->column_definition_display_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.AuthorizationCondition.JoiningCondition joining_condition = 3;</code>
     * @return int
     */
    public function getJoiningCondition()
    {
        return $this->joining_condition;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.AuthorizationCondition.JoiningCondition joining_condition = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setJoiningCondition($var)
    {
        GPBUtil::checkEnum($var, \Schema\V1\Controller\AuthorizationCondition\JoiningCondition::class);
        $this->joining_condition = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.AuthorizationCondition.Query query = 4;</code>
     * @return int
     */
    public function getQuery()
    {
        return $this->query;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.AuthorizationCondition.Query query = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setQuery($var)
    {
        GPBUtil::checkEnum($var, \Schema\V1\Controller\AuthorizationCondition\Query::class);
        $this->query = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string default_value = 5;</code>
     * @return string
     */
    public function getDefaultValue()
    {
        return $this->default_value;
    }

    /**
     * Generated from protobuf field <code>string default_value = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setDefaultValue($var)
    {
        GPBUtil::checkString($var, True);
        $this->default_value = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string authentication_class = 6;</code>
     * @return string
     */
    public function getAuthenticationClass()
    {
        return $this->authentication_class;
    }

    /**
     * Generated from protobuf field <code>string authentication_class = 6;</code>
     * @param string $var
     * @return $this
     */
    public function setAuthenticationClass($var)
    {
        GPBUtil::checkString($var, True);
        $this->authentication_class = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(AuthorizationCondition::class, \Schema\V1\Controller_AuthorizationCondition::class);

