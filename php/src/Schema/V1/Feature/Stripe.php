<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1\Feature;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Feature.Stripe</code>
 */
class Stripe extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated string subscription_tables = 1;</code>
     */
    private $subscription_tables;
    /**
     * Generated from protobuf field <code>repeated string user_tables = 2;</code>
     */
    private $user_tables;
    /**
     * Generated from protobuf field <code>string public_key = 3;</code>
     */
    protected $public_key = '';
    /**
     * Generated from protobuf field <code>string secret_key = 4;</code>
     */
    protected $secret_key = '';
    /**
     * Generated from protobuf field <code>string stripe_endpoint_secret = 5;</code>
     */
    protected $stripe_endpoint_secret = '';
    /**
     * Generated from protobuf field <code>string http_stripe_signature = 6;</code>
     */
    protected $http_stripe_signature = '';
    /**
     * Generated from protobuf field <code>bool add_stripe_subscription = 7;</code>
     */
    protected $add_stripe_subscription = false;
    /**
     * Generated from protobuf field <code>bool add_charge_api = 8;</code>
     */
    protected $add_charge_api = false;
    /**
     * Generated from protobuf field <code>bool add_intent_api = 9;</code>
     */
    protected $add_intent_api = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $subscription_tables
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $user_tables
     *     @type string $public_key
     *     @type string $secret_key
     *     @type string $stripe_endpoint_secret
     *     @type string $http_stripe_signature
     *     @type bool $add_stripe_subscription
     *     @type bool $add_charge_api
     *     @type bool $add_intent_api
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated string subscription_tables = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getSubscriptionTables()
    {
        return $this->subscription_tables;
    }

    /**
     * Generated from protobuf field <code>repeated string subscription_tables = 1;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setSubscriptionTables($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->subscription_tables = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string user_tables = 2;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getUserTables()
    {
        return $this->user_tables;
    }

    /**
     * Generated from protobuf field <code>repeated string user_tables = 2;</code>
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
     * Generated from protobuf field <code>string public_key = 3;</code>
     * @return string
     */
    public function getPublicKey()
    {
        return $this->public_key;
    }

    /**
     * Generated from protobuf field <code>string public_key = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setPublicKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->public_key = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string secret_key = 4;</code>
     * @return string
     */
    public function getSecretKey()
    {
        return $this->secret_key;
    }

    /**
     * Generated from protobuf field <code>string secret_key = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setSecretKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->secret_key = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string stripe_endpoint_secret = 5;</code>
     * @return string
     */
    public function getStripeEndpointSecret()
    {
        return $this->stripe_endpoint_secret;
    }

    /**
     * Generated from protobuf field <code>string stripe_endpoint_secret = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setStripeEndpointSecret($var)
    {
        GPBUtil::checkString($var, True);
        $this->stripe_endpoint_secret = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string http_stripe_signature = 6;</code>
     * @return string
     */
    public function getHttpStripeSignature()
    {
        return $this->http_stripe_signature;
    }

    /**
     * Generated from protobuf field <code>string http_stripe_signature = 6;</code>
     * @param string $var
     * @return $this
     */
    public function setHttpStripeSignature($var)
    {
        GPBUtil::checkString($var, True);
        $this->http_stripe_signature = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool add_stripe_subscription = 7;</code>
     * @return bool
     */
    public function getAddStripeSubscription()
    {
        return $this->add_stripe_subscription;
    }

    /**
     * Generated from protobuf field <code>bool add_stripe_subscription = 7;</code>
     * @param bool $var
     * @return $this
     */
    public function setAddStripeSubscription($var)
    {
        GPBUtil::checkBool($var);
        $this->add_stripe_subscription = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool add_charge_api = 8;</code>
     * @return bool
     */
    public function getAddChargeApi()
    {
        return $this->add_charge_api;
    }

    /**
     * Generated from protobuf field <code>bool add_charge_api = 8;</code>
     * @param bool $var
     * @return $this
     */
    public function setAddChargeApi($var)
    {
        GPBUtil::checkBool($var);
        $this->add_charge_api = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool add_intent_api = 9;</code>
     * @return bool
     */
    public function getAddIntentApi()
    {
        return $this->add_intent_api;
    }

    /**
     * Generated from protobuf field <code>bool add_intent_api = 9;</code>
     * @param bool $var
     * @return $this
     */
    public function setAddIntentApi($var)
    {
        GPBUtil::checkBool($var);
        $this->add_intent_api = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Stripe::class, \Schema\V1\Feature_Stripe::class);

