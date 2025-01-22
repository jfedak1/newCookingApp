import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack"
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from "@/components/ui/form-control";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { AlertCircle, EyeOff, Eye } from "lucide-react-native";

// const US_PHONE_REGEX = /^(?:\+?1\s?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

// Email Regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface LoginProps {
  onPressSignUp: () => void;
}

export default function Login({ onPressSignUp }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }
  // Field states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // Error states
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
  
    const handleLogin = () => {
      let valid = true;
  
      if (!EMAIL_REGEX.test(email)) {
        setEmailError(true);
        valid = false;
      } else {
        setEmailError(false);
      }

      if (password.length < 2 || password.length > 30) {
        setPasswordError(true);
        valid = false;
      } else {
        setPasswordError(false);
      }
  
      if (valid) {
        console.log('All validations passed, creating account...');
        // ...submit or proceed
      }
    };

  return (
    <Box className="flex flex-col items-center mt-[-30px] max-w-[325px]">
      <Heading size="3xl" className="text-primary-text mb-10">
        Login with Email
      </Heading>

      <VStack space="md" className="">
        
        {/* Email */}
        <FormControl isInvalid={emailError} className="min-w-full">
          <FormControlLabel>
            <FormControlLabelText className="text-lg text-typography-500">
              Email
            </FormControlLabelText>
          </FormControlLabel>
          <Input size="xl" className="rounded-xl h-[50px]">
            <InputField
              value={email}
              onChangeText={setEmail}
              placeholder="steakandshrimp@gmail.com"
            />
          </Input>
          {emailError && (
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

        {/* Password */}
        <FormControl isInvalid={passwordError} className="min-w-full">
          <FormControlLabel>
            <FormControlLabelText className="text-lg text-typography-500">
              Password
            </FormControlLabelText>
          </FormControlLabel>
          <Input size="xl" className="rounded-xl h-[50px]">
            <InputField
              value={password}
              onChangeText={setPassword}
              placeholder="1IoveSteak&Shrimp!"
              type={showPassword ? "text" : "password"}
            />
            <InputSlot className="pr-3" onPress={handleShowPassword}>
              <InputIcon as={showPassword ? Eye : EyeOff} />
            </InputSlot>
          </Input>
          {passwordError && (
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

        {/* Login */}
        <Button
          className="min-w-full rounded-xl h-[50px] mt-2 self-center"
          onPress={handleLogin}
        >
          <ButtonText className="text-lg text-typography-0">
            Login
          </ButtonText>
        </Button>
      </VStack>

      <Box className="flex flex-row items-center gap-2 mt-2">
        <Text size="lg" className="text-primary-text">
          Don&apos;t have an account?
        </Text>
        <Button onPress={onPressSignUp} size="lg" variant="link">
          <ButtonText className="text-primary-600 font-medium">Sign Up</ButtonText>
        </Button>
      </Box>
    </Box>
  );
}
