import { AspectRatio, Box, Center, Container, Grid, GridCol, Group, Text } from '@mantine/core';
import NextImage from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'next-i18next';
import { theme } from '@/theme';
import chronomap from '../../public/images/chronotys-map.png';
import douala from '../../public/images/douala.png';
import douala2 from '../../public/images/douala2.png';
import yaounde from '../../public/images/yaounde.png';
import yaounde2 from '../../public/images/yaounde2.png';
import ngaoundere from '../../public/images/ngaoundere.png';
import ngaoundere2 from '../../public/images/ngaoundere2.png';
import garoua from '../../public/images/garoua.png';
import garoua2 from '../../public/images/garoua2.png';
import maroua from '../../public/images/maroua.png';
import maroua2 from '../../public/images/maroua2.png';
import location from '../../public/images/location.png';
import classes from './mapLocation.module.css';

export default function MapLocation() {
  const [dlaHovered, setDlaHovered] = useState(false);
  const [ydeHovered, setYdeHovered] = useState(false);
  const [marHovered, setMarHovered] = useState(false);
  const [garHovered, setGarHovered] = useState(false);
  const [ngaHovered, setNgaHovered] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width: 992px)');
  const isSmallScreen = useMediaQuery('(min-width: 576px)');
  const { t } = useTranslation('common');
  const locations = [
    { name: 'Douala', href: 'https://www.google.com/maps?q=51.5074,-0.1278' },
    { name: 'Yaoundé', href: 'https://www.google.com/maps?q=40.7128,-74.0060' },
    { name: 'Maroua', href: 'https://www.google.com/maps?q=34.0522,-118.2437' },
    { name: 'Garoua', href: 'https://www.google.com/maps?q=51.5074,-0.1278' },
    {
      name: 'Ngaoundéré',
      href: 'https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Google, NOBISOFT SARL, 237 Bessengue, Douala, CM&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
    },
  ];
  return (
    <Container style={{ overflow: 'hidden' }} size={isLargeScreen ? '80%' : '90%'}>
      <Center>
        {isLargeScreen ? (
          <Box pos="relative">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps?q=51.5074,-0.1278"
            >
              <AspectRatio
                onMouseEnter={() => setDlaHovered(true)}
                onMouseLeave={() => setDlaHovered(false)}
                style={{
                  zIndex: 10,
                  position: 'absolute',
                  bottom: '83px',
                  left: '-15px',
                  borderRadius: 150,
                }}
                maw={200}
                mah={200}
              >
                <NextImage
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  alt=""
                  src={dlaHovered ? douala2 : douala}
                />
              </AspectRatio>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps?q=40.7128,-74.0060"
            >
              <AspectRatio
                onMouseEnter={() => setYdeHovered(true)}
                onMouseLeave={() => setYdeHovered(false)}
                style={{
                  zIndex: 12,
                  position: 'absolute',
                  bottom: '90px',
                  left: '36px',
                  borderRadius: 500,
                }}
                maw={245}
                mah={245}
              >
                <NextImage
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  alt=""
                  src={ydeHovered ? yaounde2 : yaounde}
                />
              </AspectRatio>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps?q=34.0522,-118.2437"
            >
              <AspectRatio
                onMouseEnter={() => setMarHovered(true)}
                onMouseLeave={() => setMarHovered(false)}
                style={{
                  zIndex: 10,
                  position: 'absolute',
                  top: '-9px',
                  right: '209px',
                  borderRadius: 500,
                }}
                maw={200}
                mah={200}
              >
                <NextImage
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  alt=""
                  src={marHovered ? maroua2 : maroua}
                />
              </AspectRatio>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps?q=51.5074,-0.1278"
            >
              <AspectRatio
                onMouseEnter={() => setGarHovered(true)}
                onMouseLeave={() => setGarHovered(false)}
                style={{
                  zIndex: 11,
                  position: 'absolute',
                  top: '90px',
                  right: '210px',
                  borderRadius: 500,
                }}
                maw={250}
                mah={250}
              >
                <NextImage
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  alt=""
                  src={garHovered ? garoua2 : garoua}
                />
              </AspectRatio>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Google, NOBISOFT SARL, 237 Bessengue, Douala, CM&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <AspectRatio
                onMouseEnter={() => setNgaHovered(true)}
                onMouseLeave={() => setNgaHovered(false)}
                style={{
                  zIndex: 11,
                  position: 'absolute',
                  top: '134px',
                  right: '233px',
                  borderRadius: 500,
                }}
                maw={290}
                mah={290}
              >
                <NextImage
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  alt=""
                  src={ngaHovered ? ngaoundere2 : ngaoundere}
                />
              </AspectRatio>
            </Link>
            <AspectRatio maw={600} mah={600}>
              <NextImage
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                alt=""
                src={chronomap}
              />
            </AspectRatio>
          </Box>
        ) : (
          <Box py={theme.spacing?.lg}>
            <Group gap={5} justify="center">
              <Text ta="center" fw="bold" fz="lg" c={theme.colors?.orange?.[0]}>
                {t('coverage')}
              </Text>
              <Text ta="center" fw="bold" fz="lg" c={theme.colors?.blue?.[0]}>
                {t('area')}
              </Text>
            </Group>
            <Text mb={theme.spacing?.md} ta="center">
              {t('desc')}
            </Text>
            <Center>
              <Grid align="center" justify="center">
                {locations.map((item, index) => (
                  <GridCol span={index === locations.length - 1 ? 12 : 6}>
                    <Center>
                      <Link
                        style={{ textDecoration: 'none' }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href}
                        key={index}
                      >
                        <Group
                          gap={0}
                          className={classes.location}
                          p={theme.spacing?.sm}
                          style={{
                            transition: 'border 0.3s ease',
                            borderRadius: '15px',
                            background: !isSmallScreen ? 'background' : 'none',
                          }}
                        >
                          <AspectRatio w={40} h={40}>
                            <NextImage
                              style={{ width: '100%', height: '100%' }}
                              alt=""
                              src={location}
                            />
                          </AspectRatio>
                          <Text c="dark" ta="center">
                            {item.name}
                          </Text>
                        </Group>
                      </Link>
                    </Center>
                  </GridCol>
                ))}
              </Grid>
            </Center>
          </Box>
        )}
      </Center>
    </Container>
  );
}
