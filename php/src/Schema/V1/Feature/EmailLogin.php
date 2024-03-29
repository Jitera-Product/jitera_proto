<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1\Feature;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Feature.EmailLogin</code>
 */
class EmailLogin extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated string tables = 1;</code>
     */
    private $tables;
    /**
     * Generated from protobuf field <code>int32 password_min_length = 2;</code>
     */
    protected $password_min_length = 0;
    /**
     * Generated from protobuf field <code>int32 remember_for = 3;</code>
     */
    protected $remember_for = 0;
    /**
     * Generated from protobuf field <code>int32 reset_password_within = 4;</code>
     */
    protected $reset_password_within = 0;
    /**
     * Generated from protobuf field <code>int32 maximum_retries = 5;</code>
     */
    protected $maximum_retries = 0;
    /**
     * Generated from protobuf field <code>.schema.v1.Feature.EmailLogin.UnlockStrategy unlock_strategy = 6;</code>
     */
    protected $unlock_strategy = 0;
    /**
     * Generated from protobuf field <code>int32 unlock_in = 7;</code>
     */
    protected $unlock_in = 0;
    /**
     * Generated from protobuf field <code>string password_regex = 8;</code>
     */
    protected $password_regex = '';
    /**
     * Generated from protobuf field <code>bool confirmation_email = 9;</code>
     */
    protected $confirmation_email = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $tables
     *     @type int $password_min_length
     *     @type int $remember_for
     *     @type int $reset_password_within
     *     @type int $maximum_retries
     *     @type int $unlock_strategy
     *     @type int $unlock_in
     *     @type string $password_regex
     *     @type bool $confirmation_email
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated string tables = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getTables()
    {
        return $this->tables;
    }

    /**
     * Generated from protobuf field <code>repeated string tables = 1;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setTables($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->tables = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 password_min_length = 2;</code>
     * @return int
     */
    public function getPasswordMinLength()
    {
        return $this->password_min_length;
    }

    /**
     * Generated from protobuf field <code>int32 password_min_length = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setPasswordMinLength($var)
    {
        GPBUtil::checkInt32($var);
        $this->password_min_length = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 remember_for = 3;</code>
     * @return int
     */
    public function getRememberFor()
    {
        return $this->remember_for;
    }

    /**
     * Generated from protobuf field <code>int32 remember_for = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setRememberFor($var)
    {
        GPBUtil::checkInt32($var);
        $this->remember_for = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 reset_password_within = 4;</code>
     * @return int
     */
    public function getResetPasswordWithin()
    {
        return $this->reset_password_within;
    }

    /**
     * Generated from protobuf field <code>int32 reset_password_within = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setResetPasswordWithin($var)
    {
        GPBUtil::checkInt32($var);
        $this->reset_password_within = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 maximum_retries = 5;</code>
     * @return int
     */
    public function getMaximumRetries()
    {
        return $this->maximum_retries;
    }

    /**
     * Generated from protobuf field <code>int32 maximum_retries = 5;</code>
     * @param int $var
     * @return $this
     */
    public function setMaximumRetries($var)
    {
        GPBUtil::checkInt32($var);
        $this->maximum_retries = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Feature.EmailLogin.UnlockStrategy unlock_strategy = 6;</code>
     * @return int
     */
    public function getUnlockStrategy()
    {
        return $this->unlock_strategy;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Feature.EmailLogin.UnlockStrategy unlock_strategy = 6;</code>
     * @param int $var
     * @return $this
     */
    public function setUnlockStrategy($var)
    {
        GPBUtil::checkEnum($var, \Schema\V1\Feature\EmailLogin\UnlockStrategy::class);
        $this->unlock_strategy = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 unlock_in = 7;</code>
     * @return int
     */
    public function getUnlockIn()
    {
        return $this->unlock_in;
    }

    /**
     * Generated from protobuf field <code>int32 unlock_in = 7;</code>
     * @param int $var
     * @return $this
     */
    public function setUnlockIn($var)
    {
        GPBUtil::checkInt32($var);
        $this->unlock_in = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string password_regex = 8;</code>
     * @return string
     */
    public function getPasswordRegex()
    {
        return $this->password_regex;
    }

    /**
     * Generated from protobuf field <code>string password_regex = 8;</code>
     * @param string $var
     * @return $this
     */
    public function setPasswordRegex($var)
    {
        GPBUtil::checkString($var, True);
        $this->password_regex = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool confirmation_email = 9;</code>
     * @return bool
     */
    public function getConfirmationEmail()
    {
        return $this->confirmation_email;
    }

    /**
     * Generated from protobuf field <code>bool confirmation_email = 9;</code>
     * @param bool $var
     * @return $this
     */
    public function setConfirmationEmail($var)
    {
        GPBUtil::checkBool($var);
        $this->confirmation_email = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(EmailLogin::class, \Schema\V1\Feature_EmailLogin::class);

