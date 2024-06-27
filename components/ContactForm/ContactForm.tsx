/* eslint-disable no-console */
import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import { Button, Group, Paper, TextInput, Textarea, Text, Dialog } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import emailJS from '@emailjs/browser';
import { theme } from '@/theme';
import classes from './contact.module.css';

const ContactForm = () => {
  const { t } = useTranslation('contact-us');
  const [loading, setIsLoading] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);
  const [dialogState, setDialogState] = useState({ message: '', color: '' });

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

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Send email using EmailJS
      const templateParams = {
        subject: ` Mr,Mme ${partnerForm.values.name} souhaite entrer en contact avec votre entreprise`,
        email: `email du client: ${partnerForm.values.email}`,
        message: `message du client: ${partnerForm.values.message}`,
        name: partnerForm.values.name,
      };
      console.log('debut envoie mail');
      emailJS
        .send('service_2sismhh', 'template_j0p9p7g', templateParams, {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        })
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);

          // Reset form or show success message
          partnerForm.reset();

          // setSuccess(true);
          setDialogState({
            color: `${theme.colors?.green?.[0]}`,
            message: 'Message successfully sent',
          });
          toggle();
          setTimeout(() => {
            close();
            // setSuccess(false);
          }, 1500);
        })
        .catch((error) => {
          console.error('FAILED...', error);
          // Show error message
          setDialogState({ color: `${theme.colors?.yellow?.[0]}`, message: 'Message not send' });
          toggle();
          setTimeout(() => {
            close();
          }, 1500);
        });
      console.log('fin envoie mail');
    } catch (error) {
      console.log('erreur survenue', error);
      setDialogState({ color: `${theme.colors?.red?.[3]}`, message: 'Something went wrong' });
      toggle();
      setTimeout(() => {
        close();
      }, 1500);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Paper
      maw={500}
      p={theme.spacing?.lg}
      bg="white.0"
      shadow="lg"
      m={theme.spacing?.sm}
      radius="md"
    >
      <Dialog
        style={{ alignItems: 'center', justifyContent: 'center' }}
        opened={opened}
        onClose={close}
        withCloseButton
        size="lg"
        radius="md"
      >
        <Text c={dialogState.color} size="md" mb="xs" fw="bold">
          {dialogState.message}
        </Text>
      </Dialog>
      <Text fw="bold" fz="md" ta="center">
        {t('title')}
      </Text>
      <form onSubmit={partnerForm.onSubmit(handleSubmit)}>
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
            loading={loading}
          >
            {t('form.labels.submit')}
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default ContactForm;
