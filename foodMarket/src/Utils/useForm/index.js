import React, {useState} from 'react';

const useForm = ({initialValue}) => {
  const [form, setForm] = useState(initialValue);

  return [
    form,
    (key, value) => {
      if (key === 'reset') {
        return setForm(initialValue);
      }
      return setForm({...form, [key]: value});
    },
  ];
};

export default useForm;
