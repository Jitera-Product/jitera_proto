<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1\Feature;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Feature.TwilioLogin</code>
 */
class TwilioLogin extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated string user_tables = 1;</code>
     */
    private $user_tables;
    /**
     * Generated from protobuf field <code>string service_id = 2;</code>
     */
    protected $service_id = '';
    /**
     * Generated from protobuf field <code>string sid = 3;</code>
     */
    protected $sid = '';
    /**
     * Generated from protobuf field <code>string token = 4;</code>
     */
    protected $token = '';
    /**
     * Generated from protobuf field <code>int32 otp_length = 5;</code>
     */
    protected $otp_length = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $user_tables
     *     @type string $service_id
     *     @type string $sid
     *     @type string $token
     *     @type int $otp_length
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated string user_tables = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getUserTables()
    {
        return $this->user_tables;
    }

    /**
     * Generated from protobuf field <code>repeated string user_tables = 1;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setUserTables($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->user_tables = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string service_id = 2;</code>
     * @return string
     */
    public function getServiceId()
    {
        return $this->service_id;
    }

    /**
     * Generated from protobuf field <code>string service_id = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setServiceId($var)
    {
        GPBUtil::checkString($var, True);
        $this->service_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string sid = 3;</code>
     * @return string
     */
    public function getSid()
    {
        return $this->sid;
    }

    /**
     * Generated from protobuf field <code>string sid = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setSid($var)
    {
        GPBUtil::checkString($var, True);
        $this->sid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string token = 4;</code>
     * @return string
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * Generated from protobuf field <code>string token = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setToken($var)
    {
        GPBUtil::checkString($var, True);
        $this->token = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 otp_length = 5;</code>
     * @return int
     */
    public function getOtpLength()
    {
        return $this->otp_length;
    }

    /**
     * Generated from protobuf field <code>int32 otp_length = 5;</code>
     * @param int $var
     * @return $this
     */
    public function setOtpLength($var)
    {
        GPBUtil::checkInt32($var);
        $this->otp_length = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(TwilioLogin::class, \Schema\V1\Feature_TwilioLogin::class);

