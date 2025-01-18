// import { Image, StyleSheet, Platform } from 'react-native';
// import { Image, StyleSheet, Platform } from 'react-native';
import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { Text } from "@/components/ui/text"
// import { Center } from "@/components/ui/center"
// import { Heading } from "@/components/ui/heading"
import { Box } from "@/components/ui/box"
import { Heading } from "@/components/ui/heading"
import { VStack } from "@/components/ui/vstack"
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from "@/components/ui/form-control"
import { AlertCircle } from 'lucide-react-native';
import { Input, InputField, InputSlot } from "@/components/ui/input"
import { Button, ButtonText } from "@/components/ui/button"
// import { Button, ButtonText } from "@/components/ui/button"
// import { Icon } from "@/components/ui/icon"
// import {
//     Modal,
//     ModalBackdrop,
//     ModalContent,
//     ModalHeader,
//     ModalCloseButton,
//     ModalBody,
//     ModalFooter,
//   } from "@/components/ui/modal"

// import { ChefHat } from 'lucide-react-native'

interface SignUpProps {
  onPressLogin: () => void;
}

// Simple username regex (letters, digits, underscores, hyphens, periods).
const USERNAME_REGEX = /^[A-Za-z0-9_.-]+$/;
// Simple US phone regex (example; customize as needed).
const US_PHONE_REGEX = /^(?:\+?1\s?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

export default function SignUp({ onPressLogin }: SignUpProps) {
  // Field states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  // Error states
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleCreateAccount = () => {
    let valid = true;

    // Example validation checks
    if (firstName.length < 2 || firstName.length > 30) {
      setFirstNameError(true);
      valid = false;
    } else {
      setFirstNameError(false);
    }

    if (lastName.length < 2 || lastName.length > 30) {
      setLastNameError(true);
      valid = false;
    } else {
      setLastNameError(false);
    }

    if (
      username.length < 3 ||
      username.length > 25 ||
      !USERNAME_REGEX.test(username)
    ) {
      setUsernameError(true);
      valid = false;
    } else {
      setUsernameError(false);
    }

    if (!US_PHONE_REGEX.test(phone)) {
      setPhoneError(true);
      valid = false;
    } else {
      setPhoneError(false);
    }

    if (valid) {
      console.log('All validations passed, creating account...');
      // ...submit or proceed
    }
  };

  return (
    <Box className="flex flex-col items-center mt-[-30px] max-w-[325px]">
      {/* <Heading size="xl" className="text-primary-text mb-4">
        Create Account
      </Heading> */}

      <VStack space="md" className="">
        {/* First & Last Name on same row */}
        <Box className="flex flex-row gap-2">
          {/* First Name */}
          <FormControl
            isInvalid={firstNameError}
            className="flex-1"
          >
            <FormControlLabel>
              <FormControlLabelText className="text-lg text-typography-500">
                First Name
              </FormControlLabelText>
            </FormControlLabel>
            <Input size="xl" className="rounded-xl">
              <InputField
                value={firstName}
                onChangeText={setFirstName}
                placeholder="john"
              />
            </Input>
            {firstNameError && (
              <FormControlError>
                <FormControlErrorIcon as={AlertCircle} />
                <FormControlErrorText
                  className="overflow-hidden flex-wrap"
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  Invalid
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>

          {/* Last Name */}
          <FormControl
            isInvalid={lastNameError}
            className="flex-1"
          >
            <FormControlLabel>
              <FormControlLabelText className="text-lg text-typography-500">
                Last Name
              </FormControlLabelText>
            </FormControlLabel>
            <Input size="xl" className="rounded-xl">
              <InputField
                value={lastName}
                onChangeText={setLastName}
                placeholder="doe"
              />
            </Input>
            {lastNameError && (
              <FormControlError>
                <FormControlErrorIcon as={AlertCircle} />
                <FormControlErrorText
                  className=" overflow-hidden flex-wrap"
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  Invalid
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>
        </Box>

        {/* Username */}
        <FormControl isInvalid={usernameError} className="min-w-full">
          <FormControlLabel>
            <FormControlLabelText className="text-lg text-typography-500">
              Username
            </FormControlLabelText>
          </FormControlLabel>
          <Input size="xl" className="rounded-xl">
            <InputField
              value={username}
              onChangeText={setUsername}
              placeholder="john_doe123"
            />
          </Input>
          {usernameError && (
            <FormControlError>
              <FormControlErrorIcon as={AlertCircle} />
              <FormControlErrorText
                className=" overflow-hidden flex-wrap"
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                Invalid
              </FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        {/* Phone */}
        <FormControl isInvalid={phoneError} className="min-w-full">
          <FormControlLabel>
            <FormControlLabelText className="text-lg text-typography-500">
              Phone #
            </FormControlLabelText>
          </FormControlLabel>
          <Input size="xl" className="rounded-xl">
            <InputField
              value={phone}
              onChangeText={setPhone}
              placeholder="+1 (000) 000 0000"
            />
          </Input>
          {phoneError && (
            <FormControlError>
              <FormControlErrorIcon as={AlertCircle} />
              <FormControlErrorText
                className=" overflow-hidden flex-wrap"
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                Invalid
              </FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        {/* Create Account Button */}
        <Button
          className="min-w-full rounded-xl h-[50px] mt-2 self-center"
          onPress={handleCreateAccount}
        >
          <ButtonText className="text-lg text-typography-0">
            Create Account
          </ButtonText>
        </Button>
      </VStack>

      {/* Already have account? */}
      <Box className="flex flex-row items-center gap-2 mt-4">
        <Text size="lg" className="text-primary-text">
          Already have an account?
        </Text>
        <Button onPress={onPressLogin} size="lg" variant="link">
          <ButtonText className="text-primary-600 font-medium">Login</ButtonText>
        </Button>
      </Box>
    </Box>
  );
}
