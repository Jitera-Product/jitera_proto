<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1\Controller\Endpoint;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Controller.Endpoint.Update</code>
 */
class Update extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.schema.v1.Controller.RequestContent body = 1;</code>
     */
    protected $body = null;
    /**
     * Generated from protobuf field <code>.schema.v1.Controller.ResourceCondition conditions = 2;</code>
     */
    protected $conditions = null;
    /**
     * Generated from protobuf field <code>.schema.v1.Controller.ResourceUpdate resources = 3;</code>
     */
    protected $resources = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Schema\V1\Controller\RequestContent $body
     *     @type \Schema\V1\Controller\ResourceCondition $conditions
     *     @type \Schema\V1\Controller\ResourceUpdate $resources
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.RequestContent body = 1;</code>
     * @return \Schema\V1\Controller\RequestContent|null
     */
    public function getBody()
    {
        return $this->body;
    }

    public function hasBody()
    {
        return isset($this->body);
    }

    public function clearBody()
    {
        unset($this->body);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.RequestContent body = 1;</code>
     * @param \Schema\V1\Controller\RequestContent $var
     * @return $this
     */
    public function setBody($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Controller\RequestContent::class);
        $this->body = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.ResourceCondition conditions = 2;</code>
     * @return \Schema\V1\Controller\ResourceCondition|null
     */
    public function getConditions()
    {
        return $this->conditions;
    }

    public function hasConditions()
    {
        return isset($this->conditions);
    }

    public function clearConditions()
    {
        unset($this->conditions);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.ResourceCondition conditions = 2;</code>
     * @param \Schema\V1\Controller\ResourceCondition $var
     * @return $this
     */
    public function setConditions($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Controller\ResourceCondition::class);
        $this->conditions = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.ResourceUpdate resources = 3;</code>
     * @return \Schema\V1\Controller\ResourceUpdate|null
     */
    public function getResources()
    {
        return $this->resources;
    }

    public function hasResources()
    {
        return isset($this->resources);
    }

    public function clearResources()
    {
        unset($this->resources);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.ResourceUpdate resources = 3;</code>
     * @param \Schema\V1\Controller\ResourceUpdate $var
     * @return $this
     */
    public function setResources($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Controller\ResourceUpdate::class);
        $this->resources = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Update::class, \Schema\V1\Controller_Endpoint_Update::class);

