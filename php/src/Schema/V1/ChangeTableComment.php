<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.ChangeTableComment</code>
 */
class ChangeTableComment extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string key = 1;</code>
     */
    protected $key = '';
    /**
     * Generated from protobuf field <code>string change_from = 2;</code>
     */
    protected $change_from = '';
    /**
     * Generated from protobuf field <code>string change_to = 3;</code>
     */
    protected $change_to = '';
    /**
     * Generated from protobuf field <code>string prev_uuid = 4;</code>
     */
    protected $prev_uuid = '';
    /**
     * Generated from protobuf field <code>string next_uuid = 5;</code>
     */
    protected $next_uuid = '';
    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableNextRecord prev_record = 6;</code>
     */
    protected $prev_record = null;
    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableNextRecord next_record = 7;</code>
     */
    protected $next_record = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $key
     *     @type string $change_from
     *     @type string $change_to
     *     @type string $prev_uuid
     *     @type string $next_uuid
     *     @type \Schema\V1\CreateTableNextRecord $prev_record
     *     @type \Schema\V1\CreateTableNextRecord $next_record
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payload::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string key = 1;</code>
     * @return string
     */
    public function getKey()
    {
        return $this->key;
    }

    /**
     * Generated from protobuf field <code>string key = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->key = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string change_from = 2;</code>
     * @return string
     */
    public function getChangeFrom()
    {
        return $this->change_from;
    }

    /**
     * Generated from protobuf field <code>string change_from = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setChangeFrom($var)
    {
        GPBUtil::checkString($var, True);
        $this->change_from = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string change_to = 3;</code>
     * @return string
     */
    public function getChangeTo()
    {
        return $this->change_to;
    }

    /**
     * Generated from protobuf field <code>string change_to = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setChangeTo($var)
    {
        GPBUtil::checkString($var, True);
        $this->change_to = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string prev_uuid = 4;</code>
     * @return string
     */
    public function getPrevUuid()
    {
        return $this->prev_uuid;
    }

    /**
     * Generated from protobuf field <code>string prev_uuid = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setPrevUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->prev_uuid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string next_uuid = 5;</code>
     * @return string
     */
    public function getNextUuid()
    {
        return $this->next_uuid;
    }

    /**
     * Generated from protobuf field <code>string next_uuid = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setNextUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->next_uuid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableNextRecord prev_record = 6;</code>
     * @return \Schema\V1\CreateTableNextRecord|null
     */
    public function getPrevRecord()
    {
        return $this->prev_record;
    }

    public function hasPrevRecord()
    {
        return isset($this->prev_record);
    }

    public function clearPrevRecord()
    {
        unset($this->prev_record);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableNextRecord prev_record = 6;</code>
     * @param \Schema\V1\CreateTableNextRecord $var
     * @return $this
     */
    public function setPrevRecord($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\CreateTableNextRecord::class);
        $this->prev_record = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableNextRecord next_record = 7;</code>
     * @return \Schema\V1\CreateTableNextRecord|null
     */
    public function getNextRecord()
    {
        return $this->next_record;
    }

    public function hasNextRecord()
    {
        return isset($this->next_record);
    }

    public function clearNextRecord()
    {
        unset($this->next_record);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableNextRecord next_record = 7;</code>
     * @param \Schema\V1\CreateTableNextRecord $var
     * @return $this
     */
    public function setNextRecord($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\CreateTableNextRecord::class);
        $this->next_record = $var;

        return $this;
    }

}

