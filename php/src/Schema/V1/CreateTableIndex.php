<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.CreateTableIndex</code>
 */
class CreateTableIndex extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string key = 1;</code>
     */
    protected $key = '';
    /**
     * Generated from protobuf field <code>.schema.v1.TableIndexMigration change_to = 2;</code>
     */
    protected $change_to = null;
    /**
     * Generated from protobuf field <code>string next_uuid = 5;</code>
     */
    protected $next_uuid = '';
    /**
     * Generated from protobuf field <code>.schema.v1.TableIndexMigration next_record = 7;</code>
     */
    protected $next_record = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $key
     *     @type \Schema\V1\TableIndexMigration $change_to
     *     @type string $next_uuid
     *     @type \Schema\V1\TableIndexMigration $next_record
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\Payloads::initOnce();
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
     * Generated from protobuf field <code>.schema.v1.TableIndexMigration change_to = 2;</code>
     * @return \Schema\V1\TableIndexMigration|null
     */
    public function getChangeTo()
    {
        return $this->change_to;
    }

    public function hasChangeTo()
    {
        return isset($this->change_to);
    }

    public function clearChangeTo()
    {
        unset($this->change_to);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.TableIndexMigration change_to = 2;</code>
     * @param \Schema\V1\TableIndexMigration $var
     * @return $this
     */
    public function setChangeTo($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\TableIndexMigration::class);
        $this->change_to = $var;

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
     * Generated from protobuf field <code>.schema.v1.TableIndexMigration next_record = 7;</code>
     * @return \Schema\V1\TableIndexMigration|null
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
     * Generated from protobuf field <code>.schema.v1.TableIndexMigration next_record = 7;</code>
     * @param \Schema\V1\TableIndexMigration $var
     * @return $this
     */
    public function setNextRecord($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\TableIndexMigration::class);
        $this->next_record = $var;

        return $this;
    }

}

