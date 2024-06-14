/* eslint-disable no-console */
import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import { Button, Group, Paper, TextInput, Textarea, Text } from '@mantine/core';
import { theme } from '@/theme';
import classes from './contact.module.css';

const ContactForm = () => {
  const { t } = useTranslation('contact-us');

  const partnerInitialsValues = {
    email: '',
    message: '',
    name: '',
  };
  const partnerValidation = Yup.object().shape({
    name: Yup.string().required(t('validation.name')),
    email: Yup.string().email().required(t('validation.email')),
    message: Yup.string().required(t('validation.message')),
  });

  const partnerForm = useForm({
    initialValues: partnerInitialsValues,
    validate: yupResolver(partnerValidation),
  });

  return (
    <Paper
      maw={500}
      p={theme.spacing?.lg}
      bg="white.0"
      shadow="lg"
      m={theme.spacing?.sm}
      radius="md"
    >
      <Text fw="bold" fz="md" ta="center">
        {t('title')}
      </Text>
      <form onSubmit={partnerForm.onSubmit(() => console.log(test))}>
        <TextInput
          label={t('form.labels.name')}
          placeholder={t('form.labels.name')}
          classNames={{ input: classes.input, label: classes.inputLabel }}
          {...partnerForm.getInputProps('name')}
          fw="bold"
          ff={theme.fontFamily}
          size="sm"
        />
        <TextInput
          label={t('form.labels.email')}
          placeholder="your@email.com"
          // required
          classNames={{ input: classes.input, label: classes.inputLabel }}
          {...partnerForm.getInputProps('email')}
          fw="bold"
          ff={theme.fontFamily}
          size="sm"
        />
        <Textarea
          // required
          label={t('form.labels.message')}
          placeholder={t('form.labels.message-placeholder')}
          minRows={6}
          mt="md"
          classNames={{ input: classes.input, label: classes.inputLabel }}
          {...partnerForm.getInputProps('message')}
          fw="bold"
          ff={theme.fontFamily}
          size="sm"
        />
        <Group justify="flex-end" mt="md">
          <Button
            type="submit"
            color={theme.colors?.red?.[0]}
            mt={theme.spacing?.sm}
            fw="bold"
            ff={theme.fontFamily}
            size="sm"
            // loading={loading}
          >
            {t('form.labels.submit')}
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default ContactForm;
