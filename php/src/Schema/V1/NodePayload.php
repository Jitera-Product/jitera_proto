<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.NodePayload</code>
 */
class NodePayload extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.schema.v1.NodeVariable value = 1;</code>
     */
    protected $value = null;
    /**
     * Generated from protobuf field <code>.schema.v1.NodeReference reference = 2;</code>
     */
    protected $reference = null;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeAction actions = 3;</code>
     */
    private $actions;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Schema\V1\NodeVariable $value
     *     @type \Schema\V1\NodeReference $reference
     *     @type array<\Schema\V1\NodeAction>|\Google\Protobuf\Internal\RepeatedField $actions
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.NodeVariable value = 1;</code>
     * @return \Schema\V1\NodeVariable|null
     */
    public function getValue()
    {
        return $this->value;
    }

    public function hasValue()
    {
        return isset($this->value);
    }

    public function clearValue()
    {
        unset($this->value);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.NodeVariable value = 1;</code>
     * @param \Schema\V1\NodeVariable $var
     * @return $this
     */
    public function setValue($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\NodeVariable::class);
        $this->value = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.NodeReference reference = 2;</code>
     * @return \Schema\V1\NodeReference|null
     */
    public function getReference()
    {
        return $this->reference;
    }

    public function hasReference()
    {
        return isset($this->reference);
    }

    public function clearReference()
    {
        unset($this->reference);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.NodeReference reference = 2;</code>
     * @param \Schema\V1\NodeReference $var
     * @return $this
     */
    public function setReference($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\NodeReference::class);
        $this->reference = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeAction actions = 3;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getActions()
    {
        return $this->actions;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeAction actions = 3;</code>
     * @param array<\Schema\V1\NodeAction>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setActions($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodeAction::class);
        $this->actions = $arr;

        return $this;
    }

}
