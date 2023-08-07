<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1\NodeAction;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v1.NodeAction.ActionSource</code>
 */
class ActionSource
{
    /**
     * Generated from protobuf enum <code>AUTHENTICATION = 0;</code>
     */
    const AUTHENTICATION = 0;
    /**
     * Generated from protobuf enum <code>BACKEND_CALL = 1;</code>
     */
    const BACKEND_CALL = 1;
    /**
     * Generated from protobuf enum <code>FORM_SUBMIT = 2;</code>
     */
    const FORM_SUBMIT = 2;
    /**
     * Generated from protobuf enum <code>NAVIGATION = 3;</code>
     */
    const NAVIGATION = 3;
    /**
     * Generated from protobuf enum <code>SHOW_TOAST_MESSAGE = 4;</code>
     */
    const SHOW_TOAST_MESSAGE = 4;
    /**
     * Generated from protobuf enum <code>MOLECULE_PROPS = 5;</code>
     */
    const MOLECULE_PROPS = 5;
    /**
     * Generated from protobuf enum <code>MODAL = 6;</code>
     */
    const MODAL = 6;
    /**
     * Generated from protobuf enum <code>EVENT_LOG = 7;</code>
     */
    const EVENT_LOG = 7;
    /**
     * Generated from protobuf enum <code>REQUEST_NOTIFICATION_PERMISSION = 8;</code>
     */
    const REQUEST_NOTIFICATION_PERMISSION = 8;
    /**
     * Generated from protobuf enum <code>DRAWER = 9;</code>
     */
    const DRAWER = 9;

    private static $valueToName = [
        self::AUTHENTICATION => 'AUTHENTICATION',
        self::BACKEND_CALL => 'BACKEND_CALL',
        self::FORM_SUBMIT => 'FORM_SUBMIT',
        self::NAVIGATION => 'NAVIGATION',
        self::SHOW_TOAST_MESSAGE => 'SHOW_TOAST_MESSAGE',
        self::MOLECULE_PROPS => 'MOLECULE_PROPS',
        self::MODAL => 'MODAL',
        self::EVENT_LOG => 'EVENT_LOG',
        self::REQUEST_NOTIFICATION_PERMISSION => 'REQUEST_NOTIFICATION_PERMISSION',
        self::DRAWER => 'DRAWER',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(ActionSource::class, \Schema\V1\NodeAction_ActionSource::class);

