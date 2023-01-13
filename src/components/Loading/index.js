import { View, HStack, Spinner, Heading, Center } from 'native-base';
import { Button } from '../Button';
import { colors } from '../../styles';


export function Loading({text,fetchData}){
    return (
        <View mt={50}>
            <Center>
                <HStack space={2} justifyContent="center">
                    <Spinner accessibilityLabel="Loading posts" />
                    <Heading color="primary.500" fontSize="md">
                    Loading
                    </Heading>
                </HStack>
                <Button            
                    title="Buscar Tasks!!" 
                    onPress={()=>fetchData()} 
                    backgroundColor = {colors.blue_tertiary}
                />
            </Center>
        </View>
    )
}