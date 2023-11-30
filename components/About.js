import { Box, Grid, Link, Text } from 'theme-ui'
import React, { useState } from 'react'
import Photo from "./Photo"

const About = () => {
    const [count, setCount] = useState(0)

    let images = [
        {
            alt: 'Hackers attending a workshop at ABESIT',
            src: '/about1.jpg'
        },
        {
            alt: 'Hackers during mentorship session',
            src: '/about2.jpg'
        },
        {
            alt: 'Post hacking photo session',
            src: '/about3.jpg'
        },
    ]

    return (
        <Box as="section" sx={{ py: [4, 5, '82px'], color: 'black' }}>
            <Box
                sx={{
                    position: 'relative',
                    width: '90vw',
                    maxWidth: 'layout',
                    margin: 'auto'
                }}
            >
                <Text
                    variant="title"
                    as="h1"
                    sx={{ fontSize: ['36px', '48px', '56px'] }}
                >Register for
                    <Text
                        as="span"
                        sx={{
                            borderRadius: 'default',
                            px: 1,
                            mx: 0,
                            whiteSpace: ['wrap', 'nowrap', 'nowrap'],
                            color: '#8ed665',
                        }}
                    >
                        {' '}  DevScript 1.0 {' '}
                    </Text>
                    Now!
                </Text>
                <Text
                    variant="subtitle"
                    as="p"
                    sx={{
                        fontSize: ['18px', '20px', '22px'],
                        pb: [3, 3, 4],
                        maxWidth: '62ch'
                    }}
                >

                    Join DevSprint 1.0, a 9-hour cosmic hackathon for <span style={{ fontWeight: 800, color: '#009aab' }}>Developers</span>,{' '} <span style={{ fontWeight: 800, color: '#ffb400' }}>Innovaters</span>, <span style={{ fontWeight: 800, color: 'green' }}>Designers</span> and more {' '}! 🚀 Unleash your coding prowess, design genius, and solve real world problems and win amazing goodies 👕 and Cash prizes!
                </Text>
                <Grid columns={[1, 1, 1, '2.5fr 3fr']} gap={[0, 3, 4]} pt={[3, 4]}>
                    <Box
                        sx={{
                            position: 'relative',
                            height: ['300px', '300px', '300px', '100%'],
                            py: [3, 3, 3, 0]
                        }}
                        onClick={() => {
                            setCount(count + 1)
                        }}
                    >
                        <Box
                            sx={{ position: 'absolute', width: '100%', height: '100%' }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: ['300px', '300px', '100%'],
                                    figure: {
                                        position: 'absolute',
                                        transform:
                                            count % 2 === 0 ? 'rotate(3deg)' : 'rotate(-3deg)',
                                        height: '85%',
                                        width: ['80%', '80%', '40%', '70%'],
                                        marginLeft: ['10%', '10%', '15%', '0']
                                    },
                                    zIndex: 3,
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                <Photo
                                    src={
                                        count === images.length - 2
                                            ? images[0].src
                                            : images.length - 1
                                                ? images[1].src
                                                : images[count + 2].src
                                    }
                                    alt={
                                        count === images.length - 2
                                            ? images[0].alt
                                            : images.length - 1
                                                ? images[1].alt
                                                : images[count + 2].alt
                                    }
                                    width={1200}
                                    height={900}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{ position: 'absolute', width: '100%', height: '100%' }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: ['300px', '300px', '100%'],
                                    figure: {
                                        position: 'absolute',
                                        transform:
                                            count % 2 === 0 ? 'rotate(-3deg)' : 'rotate(3deg)',
                                        height: '85%',
                                        width: ['80%', '80%', '40%', '80%'],
                                        marginLeft: ['10%', '10%', '15%', '0']
                                    },
                                    zIndex: 3,
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                <Photo
                                    src={images[(count + 2) % images.length].src}
                                    alt={images[(count + 2) % images.length].alt}
                                    width={1200}
                                    height={900}
                                />

                            </Box>
                        </Box>
                        <Box
                            sx={{ position: 'absolute', width: '100%', height: '100%' }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: ['300px', '300px', '100%'],
                                    figure: {
                                        position: 'absolute',
                                        transform:
                                            count % 2 === 0 ? 'rotate(3deg)' : 'rotate(-3deg)',
                                        height: '85%',
                                        width: ['80%', '80%', '40%', '90%'],
                                        marginLeft: ['10%', '10%', '15%', '0']
                                    },
                                    zIndex: 3,
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                <Photo
                                    src={images[(count + 2) % images.length].src}
                                    alt={images[(count + 2) % images.length].alt}
                                    width={2400}
                                    height={1200}
                                />

                            </Box>
                        </Box>
                    </Box>
                    <Grid
                        columns="1fr"
                        sx={{
                            gridColumnGap: 3,
                            span: {
                                width: 36,
                                height: 36,
                                borderRadius: 24,
                                display: 'inline-block',
                                fontSize: 2,
                                lineHeight: '30px',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                border: '3px solid currentColor'
                            },
                            p: { my: 0, fontSize: ['18px', '20px', '22px'] },
                            strong: { display: 'block', fontSize: ['22px', 2, 3] }
                        }}
                        as="ul"
                    >
                        <Grid
                            columns="auto 1fr"
                            sx={{
                                transitionDuration: '0.52s',
                                py: 2,
                                px: 2,
                                color: 'inherit',
                                position: 'relative',
                                textDecoration: 'none',
                                borderRadius: 'extra'
                            }}
                            as="li"
                        >
                            <Text as="span" color="red" aria-hidden="true">
                                1
                            </Text>
                            <Text as="p" variant="subtitle">
                                <strong sx={{ mb: 1 }}>
                                    Innovation and Creativity
                                </strong>
                                DevScript 1.0 Fosters creativity and innovation by collaborating with diverse minds to generate groundbreaking ideas and prototypes quickly.
                            </Text>
                        </Grid>
                        <Grid
                            columns="auto 1fr"
                            sx={{
                                transitionDuration: '0.52s',
                                py: 2,
                                px: 2,
                                color: 'inherit',
                                position: 'relative',
                                textDecoration: 'none',
                                borderRadius: 'extra'
                            }}
                            as="li"
                        >
                            <Text as="span" color="orange" aria-hidden="true">
                                2
                            </Text>
                            <Text
                                as="p"
                                variant="subtitle"
                                sx={{
                                    mt: 0
                                }}
                            >
                                <strong sx={{ mb: 1 }}>
                                    Skill Development and Learning
                                </strong>
                                Enhance your skills in coding, design, teamwork, and communication through mentors, and learning from experts/peers.
                            </Text>
                        </Grid>
                        <Grid
                            columns="auto 1fr"
                            sx={{
                                transitionDuration: '0.52s',
                                py: 2,
                                px: 2,
                                color: 'inherit',
                                position: 'relative',
                                textDecoration: 'none',
                                borderRadius: 'extra'
                            }}
                            as="li"
                        >
                            <Text as="span" color="green" aria-hidden="true">
                                3
                            </Text>
                            <Text as="p" variant="subtitle">
                                <strong sx={{ mb: 1 }}>Gather IRL with other makers</strong>
                                Meet other Hackers and potential employers, and mentors in the community.

                            </Text>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default About