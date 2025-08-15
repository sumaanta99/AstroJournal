
/**
 *This is a dropdown for all the zodiac signs
 *which when changed gives data according to the zodiac 
 *selected.
 */
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, StyleSheet } from 'react-native';
import { ZODIAC_SIGNS, ZodiacSign } from '../types/ZodiacType';

interface DropdownProps {
  value: ZodiacSign;
  onChange: (value: ZodiacSign) => void;
}

export default function Dropdown({ value, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(ZODIAC_SIGNS);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={(callback) => {
          const val = callback(value) as ZodiacSign;
          onChange(val);
        }}
        setItems={setItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        zIndexInverse={6000} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  dropdown: {
    borderColor: '#ccc',
  },
  dropdownContainer: {
    borderColor: '#ccc',
  },
});
