<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1\Authorization;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Authorization.Policy</code>
 */
class Policy extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string resource = 3;</code>
     */
    protected $resource = '';
    /**
     * Generated from protobuf field <code>.schema.v1.Authorization.Policy.RoleBinding role_binding = 4;</code>
     */
    protected $role_binding = null;
    /**
     * Generated from protobuf field <code>.schema.v1.Authorization.Policy.Rule rule = 5;</code>
     */
    protected $rule = null;
    /**
     * Generated from protobuf field <code>.schema.v1.Authorization.Policy.Scope scope = 6;</code>
     */
    protected $scope = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $resource
     *     @type \Schema\V1\Authorization\Policy\RoleBinding $role_binding
     *     @type \Schema\V1\Authorization\Policy\Rule $rule
     *     @type int $scope
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payload::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string resource = 3;</code>
     * @return string
     */
    public function getResource()
    {
        return $this->resource;
    }

    /**
     * Generated from protobuf field <code>string resource = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setResource($var)
    {
        GPBUtil::checkString($var, True);
        $this->resource = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Authorization.Policy.RoleBinding role_binding = 4;</code>
     * @return \Schema\V1\Authorization\Policy\RoleBinding|null
     */
    public function getRoleBinding()
    {
        return $this->role_binding;
    }

    public function hasRoleBinding()
    {
        return isset($this->role_binding);
    }

    public function clearRoleBinding()
    {
        unset($this->role_binding);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Authorization.Policy.RoleBinding role_binding = 4;</code>
     * @param \Schema\V1\Authorization\Policy\RoleBinding $var
     * @return $this
     */
    public function setRoleBinding($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Authorization\Policy\RoleBinding::class);
        $this->role_binding = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Authorization.Policy.Rule rule = 5;</code>
     * @return \Schema\V1\Authorization\Policy\Rule|null
     */
    public function getRule()
    {
        return $this->rule;
    }

    public function hasRule()
    {
        return isset($this->rule);
    }

    public function clearRule()
    {
        unset($this->rule);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Authorization.Policy.Rule rule = 5;</code>
     * @param \Schema\V1\Authorization\Policy\Rule $var
     * @return $this
     */
    public function setRule($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Authorization\Policy\Rule::class);
        $this->rule = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Authorization.Policy.Scope scope = 6;</code>
     * @return int
     */
    public function getScope()
    {
        return $this->scope;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Authorization.Policy.Scope scope = 6;</code>
     * @param int $var
     * @return $this
     */
    public function setScope($var)
    {
        GPBUtil::checkEnum($var, \Schema\V1\Authorization\Policy\Scope::class);
        $this->scope = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Policy::class, \Schema\V1\Authorization_Policy::class);

