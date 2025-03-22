import React, { useEffect } from "react";
import { Contato, getContatoById } from "../../services/contatos";
import { View, Text, ActivityIndicator } from "react-native";
import { styles } from "../../estilos/main";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

const Detalhes: React.FC<Contato> = () => {
    const { id } = useLocalSearchParams();
    const [contato, setContato] = useState<Contato | null>(null);

    useEffect(  () => {
        const carregarContato = async () => {
            const meucontato = await getContatoById(id.toString());
            setContato(meucontato);
        }
        carregarContato();
    }, []);

    return(
        <View style={styles.container}>
            {(contato) ? (
                <>
            <Text style={styles.text}>{contato!.nome}</Text>
            <Text style={styles.text}>{contato!.email}</Text>
            <Text style={styles.text}>{contato!.telefone}</Text>
            <Text style={styles.text}>{contato!.endereco}</Text>
                </>
            ) : <ActivityIndicator size="large" color="0000ff" />}
        </View>
    );
}
export default Detalhes;