import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { AlertCircle } from "lucide-react-native";

const US_PHONE_REGEX = /^(?:\+?1\s?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

interface LoginProps {
  onPressSignUp: () => void;
}

export default function Login({ onPressSignUp }: LoginProps) {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const handleSendOneTimePasscode = () => {
    if (!US_PHONE_REGEX.test(phone)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
      // proceed with sending OTP
    }
  };

  return (
    <Box className="flex flex-col items-center">
      <Heading size="3xl" className="text-primary-text mb-10">
        Phone Login
      </Heading>

      <FormControl isInvalid={phoneError} className="w-[300px]">
        <Box className="flex flex-row items-center w-[300px] gap-3">
          <Text className="text-2xl font-medium">+1</Text>
          <Input
            variant="outline"
            size="xl"
            className="flex-1 h-[54px] rounded-xl"
          >
            <InputField
              placeholder="000 000 0000"
              value={phone}
              onChangeText={setPhone}
            />
          </Input>
        </Box>

        {phoneError && (
          <FormControlError>
            <FormControlErrorIcon as={AlertCircle} />
            <FormControlErrorText
              className="overflow-hidden flex-wrap"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              Invalid phone number
            </FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      <Button
        className="rounded-xl w-[300px] h-[50px] mt-4"
        onPress={handleSendOneTimePasscode}
      >
        <ButtonText className="text-xl">Send One-time Passcode</ButtonText>
      </Button>

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
