import { Title, Text, Anchor } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import classes from './Welcome.module.css';

export function Welcome() {
  const { t } = useTranslation('common');
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        {t('title')}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
           {t('name')}
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        {t('start-text')}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          {t('guide')}
        </Anchor>
        {t('end-text')}
      </Text>
    </>
  );
}
