import { Box, Button, Center, Container, Group, Text } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { theme } from '@/theme';

export default function ContactSection() {
  const { t } = useTranslation('common');
  return (
    <Box py={theme.spacing?.xl} bg={theme.colors?.blue?.[1]}>
      <Center>
        <Container size="90%">
          <Text fw="bold" fz="lg" c="white.0" ta="center">
            {t('contact')}
          </Text>
          <Text c="white.0" ta="center">
            {t('contact-text')}
          </Text>
          <Group mt={theme.spacing?.xl} justify="center" gap="xl">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://forms.gle/jtdiiWxLVg5RuuKy9"
            >
              <Button w="190px" color={theme.colors?.orange?.[0]} h="50px">
                {t('partner')}
              </Button>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://forms.gle/Gkc8fE7RemBqVfdA7"
            >
              <Button w="190px" color={theme.colors?.orange?.[0]} h="50px">
                {t('order')}
              </Button>
            </Link>
          </Group>
        </Container>
      </Center>
    </Box>
  );
}
