import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

type Category = '' | 'Vegetables' | 'Dairy' | 'Meats' | 'Fruits' | 'Kitchen Staples';


const ReceiptUploadScreen: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof itemsData | ''>('');
    const [selectedItem, setSelectedItem] = useState<string>('');

    const categoryData = [
        { key: '1', value: 'Kitchen Staples' },
        { key: '2', value: 'Vegetables' },
        { key: '3', value: 'Fruits' },
        { key: '4', value: 'Meats' },
        { key: '5', value: 'Dairy' },
    ];

    const itemsData = {
        Vegetables: [
            { key: '1', value: 'Carrot' },
            { key: '2', value: 'Broccoli' },
            { key: '3', value: 'Spinach' },
        ],
        Dairy: [
            { key: '1', value: 'Milk' },
            { key: '2', value: 'Cheese' },
            { key: '3', value: 'Yogurt' },
        ],
        Meats: [
            { key: '1', value: 'Chicken' },
            { key: '2', value: 'Beef' },
            { key: '3', value: 'Turkey' },
        ],
        Fruits: [
            { key: '1', value: 'Apple' },
            { key: '2', value: 'Banana' },
            { key: '3', value: 'Orange' },
        ],
        'Kitchen Staples': [
            { key: '1', value: 'Salt' },
            { key: '2', value: 'Pepper' },
            { key: '3', value: 'Sugar' },
        ],
    };

    const handleCategoryChange = (category: string) => {
        // Ensure the category is one of the defined categories
        if (['', 'Vegetables', 'Dairy', 'Meats', 'Fruits', 'Kitchen Staples'].includes(category)) {
          setSelectedCategory(category as Category);
          setSelectedItem(''); // Reset item selection
        } else {
          // TODO: Handle invalid category selection 
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Receipt Upload</Text>
            <Text>Select Category:</Text>
            <SelectList
                setSelected={handleCategoryChange}
                data={categoryData}
                save="value"
            />
            {selectedCategory && (
                <>
                    <Text>Select Item:</Text>
                    <SelectList
                        setSelected={setSelectedItem}
                        data={itemsData[selectedCategory]}
                        save="value"
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default ReceiptUploadScreen;
