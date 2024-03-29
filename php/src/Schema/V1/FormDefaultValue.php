<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.FormDefaultValue</code>
 */
class FormDefaultValue extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.schema.v1.NodeReference reference = 1;</code>
     */
    protected $reference = null;
    /**
     * Generated from protobuf field <code>.schema.v1.NodeVariable value = 2;</code>
     */
    protected $value = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Schema\V1\NodeReference $reference
     *     @type \Schema\V1\NodeVariable $value
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.NodeReference reference = 1;</code>
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
     * Generated from protobuf field <code>.schema.v1.NodeReference reference = 1;</code>
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
     * Generated from protobuf field <code>.schema.v1.NodeVariable value = 2;</code>
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
     * Generated from protobuf field <code>.schema.v1.NodeVariable value = 2;</code>
     * @param \Schema\V1\NodeVariable $var
     * @return $this
     */
    public function setValue($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\NodeVariable::class);
        $this->value = $var;

        return $this;
    }

}

