import { View, HStack, Spinner, Heading, Center } from 'native-base';

export function Loading({text}){
    return (
        <View mt={50}>
            <Center>
                <HStack space={2} justifyContent="center">
                    <Spinner accessibilityLabel="Loading posts" />
                    <Heading color="primary.500" fontSize="md">
                    Loading
                    </Heading>
                </HStack>
            </Center>
        </View>
    )
}