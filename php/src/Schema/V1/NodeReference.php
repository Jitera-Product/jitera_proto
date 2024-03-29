<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.NodeReference</code>
 */
class NodeReference extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string name = 1;</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string ref_id = 2;</code>
     */
    protected $ref_id = '';
    /**
     * Generated from protobuf field <code>.google.protobuf.Struct ref_data = 3;</code>
     */
    protected $ref_data = null;
    /**
     * Generated from protobuf field <code>string value = 4;</code>
     */
    protected $value = '';
    /**
     * Generated from protobuf field <code>.schema.v1.NodeReference.ReferenceRefType ref_type = 5;</code>
     */
    protected $ref_type = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *     @type string $ref_id
     *     @type \Google\Protobuf\Struct $ref_data
     *     @type string $value
     *     @type int $ref_type
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string name = 1;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string ref_id = 2;</code>
     * @return string
     */
    public function getRefId()
    {
        return $this->ref_id;
    }

    /**
     * Generated from protobuf field <code>string ref_id = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setRefId($var)
    {
        GPBUtil::checkString($var, True);
        $this->ref_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Struct ref_data = 3;</code>
     * @return \Google\Protobuf\Struct|null
     */
    public function getRefData()
    {
        return $this->ref_data;
    }

    public function hasRefData()
    {
        return isset($this->ref_data);
    }

    public function clearRefData()
    {
        unset($this->ref_data);
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Struct ref_data = 3;</code>
     * @param \Google\Protobuf\Struct $var
     * @return $this
     */
    public function setRefData($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Struct::class);
        $this->ref_data = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string value = 4;</code>
     * @return string
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * Generated from protobuf field <code>string value = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setValue($var)
    {
        GPBUtil::checkString($var, True);
        $this->value = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.NodeReference.ReferenceRefType ref_type = 5;</code>
     * @return int
     */
    public function getRefType()
    {
        return $this->ref_type;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.NodeReference.ReferenceRefType ref_type = 5;</code>
     * @param int $var
     * @return $this
     */
    public function setRefType($var)
    {
        GPBUtil::checkEnum($var, \Schema\V1\NodeReference\ReferenceRefType::class);
        $this->ref_type = $var;

        return $this;
    }

}

