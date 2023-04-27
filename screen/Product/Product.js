import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Modal, Alert, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EditButton, DeleteButton } from '../../Components/Buttons';
import * as DocumentPicker from 'expo-document-picker';
import ImagePicker from 'react-native-image-picker';

const UserScreen = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState({ visible: false, status: '' });
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [dataVersion, setDataVersion] = useState(0);

    //query Article
    const QueryUser = async () => {
        try {
            const result = await fetch('http://192.168.1.41:3000/books', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const data = await result.json();
            setUsers(data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        QueryUser()
    }, [dataVersion])

    const handleUpdate = (item) => {
        setID(item.id)
        setName(item.name);
        setUsername(item.username);
        setGender(item.gender);
        setPassword(item.password);
        setShowModal({ visible: true, status: 'Edit' });
    };

    const handleDelete = (item) => {
        fetch(`http://192.168.1.41:3000/users/${item.id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((responseData) => {
                const newData = users.filter((value) => value.id !== item.id);
                setUsers(newData);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const renderUser = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.price}</Text>
            <Text style={styles.cell}>{item.image}</Text>
            {/* <EditButton onPress={() => handleUpdate(item)} />
            <DeleteButton onPress={() => handleDelete(item)} /> */}
        </View>
    );
    const addUser = () => {
        setShowModal({ visible: true, status: 'Add' });
    };
    const handleSubmitPUT = async (event) => {
        event.preventDefault();
        const newData = { name, username, gender }
        console.log('update', newData)
        try {
            const result = await fetch(`http://192.168.1.41:3000/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newData)
            })
            setLoading(false);
            setShowModal({ visible: false, status: '' });
            setName('');
            setUsername('');
            setGender('');
            setPassword('');
            setDataVersion(dataVersion + 1);
            Alert.alert('Success', 'Update Success.');
        } catch (error) {
            console.error(error);
        }
    }
    const [image, setImage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('image', image)
        await fetch('http://192.168.1.41:3000/books/add', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));

    };
    console.log('image', image)
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        setImage(result);
    }

    let uploadImage = async () => {
        const buffer = Buffer.from(image.replace("data:image/png;base64,", "").replace("data:image/jpeg;base64,", ""), "base64")
        console.log(buffer)
        const fileToUpload = image;
        const data = new FormData();
        data.append('name', name);
        data.append('price', price);
        data.append('image', fileToUpload);
        let res = await fetch(
            'http://192.168.1.41:3000/books/add',
            {
                method: 'POST',
                body: data,
            }
        );
        let responseJson = await res.json();
        if (responseJson.status == 1) {
            alert('Upload Successful');
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerCell}>Name</Text>
                <Text style={styles.headerCell}>Price</Text>
                <Text style={styles.headerCell}>Image</Text>
            </View>
            <FlatList
                data={users}
                renderItem={renderUser}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity style={styles.addButton} onPress={addUser}>
                <Ionicons name="add-circle" size={64} color="#007AFF" />
            </TouchableOpacity>
            <Modal visible={showModal.visible} animationType="slide">
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Add User</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Price"
                        value={price}
                        onChangeText={(text) => setPrice(text)}
                    />
                    <TouchableOpacity onPress={pickDocument}>
                        <Text>Select File</Text>
                    </TouchableOpacity>
                    {image && (
                        <Text>{`Selected File: ${image.name}`}</Text>
                    )}
                    <TouchableOpacity style={styles.button} onPress={uploadImage}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        setShowModal({ visible: false, status: '' })
                    }
                    }>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal >
        </View >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
    },
    header: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#007AFF',
        backgroundColor: '#F5F5F5',
        paddingVertical: 10,
    },
    cell: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center'
    },
    headerCell: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
export default UserScreen;
