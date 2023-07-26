import { writable, readable } from 'svelte/store';
import WmCard from './WmCard.svelte';
import WmAccordion from './WmAccordion.svelte';
import WmCta from './WmCta.svelte';

export const templateStore = writable({
	accordionData: {
		component: 'wm-accordion',
		props: {
			open: false,
			multiple: false,
			'data-demo-pattern': 'wm-accordion-preview'
		},
		children: [
			{
				component: 'h3',
				props: {
					slot: 'heading'
				},
				children: [
					{
						component: 'text',
						content:
							'Ist eine Mitgliedschaft beim Vorteilsclub der Stadt Wien mit Kosten verbunden?'
					}
				]
			},
			{
				component: 'div',
				props: {
					slot: 'content'
				},
				children: [
					{
						component: 'p',
						children: [
							{
								component: 'text',
								content:
									'Nein. Die Mitgliedschaft im Vorteilsclub der Stadt Wien ist absolut kostenlos und ohne Bindung.'
							}
						]
					}
				]
			},
			{
				component: 'h3',
				props: {
					slot: 'heading'
				},
				children: [
					{
						component: 'text',
						content: 'Wer kann Mitglied im Vorteilsclub der Stadt Wien werden?'
					}
				]
			},
			{
				component: 'div',
				props: {
					slot: 'content'
				},
				children: [
					{
						component: 'p',
						children: [
							{
								component: 'text',
								content:
									'Jede natürliche Person mit Wohnsitz in Österreich, die das 16. Lebensjahr vollendet hat.'
							}
						]
					}
				]
			}
		]
	},
	cardData: {
		component: 'wm-card',
		props: {
			'data-demo-pattern': 'wm-card-preview',
			size: 'm'
		},
		children: [
			{
				component: 'h3',
				props: {
					slot: 'heading',
					'data-demo': true,
					'data-demo-text': true
				},
				children: [{ component: 'text', content: 'Parkpickerl im grünen Prater' }]
			},
			{
				component: 'div',
				props: {
					slot: 'content',
					class: 'text'
				},
				children: [
					{
						component: 'p',
						children: [
							{
								component: 'text',
								content:
									'Seit 4. Juli gelten im Prater die <a href="#">flächendeckende Kurzparkzone</a> und das Parkpickerl für Bezirks-Bewohner*innen.'
							}
						]
					}
				]
			},
			{
				component: 'div',
				props: {
					slot: 'content',
					class: 'list'
				},
				children: [
					{
						component: 'ul',
						children: [
							{
								component: 'li',
								children: [
									{
										component: 'a',
										props: { href: '/#' },
										children: [{ component: 'text', content: 'Parken' }]
									}
								]
							},
							{
								component: 'li',
								children: [
									{
										component: 'a',
										props: { href: '/#' },
										children: [{ component: 'text', content: 'Parkenpickerl' }]
									}
								]
							},
							{
								component: 'li',
								children: [
									{
										component: 'a',
										props: { href: '/#' },
										children: [{ component: 'text', content: 'Parken in Wien' }]
									}
								]
							}
						]
					}
				]
			},
			{
				component: 'img',
				props: {
					slot: 'media',
					src: '/images/parkpickerl-prater.jpg',
					width: '350',
					height: '197',
					alt: 'Parkpickerl im grünen Prater'
				},
				children: []
			},
			{
				component: 'div',
				props: {
					slot: 'eyecatcher',
					class: 'eyecatcher'
				},
				children: [{ component: 'text', content: '-10%' }]
			}
		]
	},
	sectionData: {
		component: 'div',
		children: [
			{
				component: 'wm-section',
				props: {
					contentsize: 'full',
					nav: ''
				},
				children: [
					{
						component: 'div',
						children: [
							{
								component: 'wm-anchor',
								children: [
									{
										component: 'h2',
										props: {
											id: 'ueberschrift-2'
										},
										children: [
											{
												component: 'text',
												content: 'Überschrift 2'
											}
										]
									}
								]
							},
							{
								component: 'p',
								children: [
									{
										component: 'text',
										content:
											'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere quidem voluptatem aut perferendis quas debitis quia molestiae. Rerum similique voluptatibus ex temporibus ratione delectus enim, inventore autem aliquam quibusdam.'
									}
								]
							},
							{
								component: 'p',
								children: [
									{
										component: 'text',
										content:
											'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere quidem voluptatem aut perferendis quas debitis quia molestiae. Rerum similique voluptatibus ex temporibus ratione delectus enim, inventore autem aliquam quibusdam.'
									}
								]
							},
							{
								component: 'p',
								children: [
									{
										component: 'text',
										content:
											'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere quidem voluptatem aut perferendis quas debitis quia molestiae. Rerum similique voluptatibus ex temporibus ratione delectus enim, inventore autem aliquam quibusdam.'
									}
								]
							},
							{
								component: 'p',
								children: [
									{
										component: 'text',
										content:
											'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere quidem voluptatem aut perferendis quas debitis quia molestiae. Rerum similique voluptatibus ex temporibus ratione delectus enim, inventore autem aliquam quibusdam.'
									}
								]
							},
							{
								component: 'p',
								children: [
									{
										component: 'text',
										content:
											'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere quidem voluptatem aut perferendis quas debitis quia molestiae. Rerum similique voluptatibus ex temporibus ratione delectus enim, inventore autem aliquam quibusdam.'
									}
								]
							},
							{
								component: 'p',
								children: [
									{
										component: 'text',
										content:
											'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere quidem voluptatem aut perferendis quas debitis quia molestiae. Rerum similique voluptatibus ex temporibus ratione delectus enim, inventore autem aliquam quibusdam.'
									}
								]
							}
						]
					}
				]
			}
		]
	},
	CarouselData: {
		component: 'wm-carousel',
		props: {
			update: ''
		},
		children: [
			{
				component: 'wm-card',
				props: {
					size: 'm',
					blocklink: '',
					class: 'first',
					inert: ''
				},
				children: [
					{
						component: 'h3',
						props: {
							slot: 'heading'
						},
						children: [
							{
								component: 'a',
								props: {
									href: '#'
								},
								children: [
									{
										component: 'text',
										content: 'Erzherzog-Karl-Straße Süd - Lebenswertes Wohnquartier'
									}
								]
							}
						]
					},
					{
						component: 'div',
						props: {
							slot: 'content'
						},
						children: [
							{
								component: 'p',
								children: [
									{
										component: 'text',
										content:
											'Auf dem rund 19 Hektar großen Gebiet "Erzherzog-Karl-Straße Süd" im 22. Bezirk soll ein Wohnquartier mit Grün- und Freiräumen entstehen.'
									}
								]
							}
						]
					},
					{
						component: 'img',
						props: {
							src: '/images/pattern/cards/parkpickerl-prater.jpg',
							width: '350',
							height: '197',
							slot: 'media'
						}
					}
				]
			},
			{
				component: 'wm-card',
				props: {
					size: 'm',
					blocklink: '',
					class: 'current',
					inert: ''
				},
				children: [
					{
						component: 'h3',
						props: {
							slot: 'heading'
						},
						children: [
							{
								component: 'a',
								props: {
									href: '#'
								},
								children: [
									{
										component: 'text',
										content: 'Oberlaa und Umgebung'
									}
								]
							}
						]
					},
					{
						component: 'div',
						props: {
							slot: 'content'
						},
						children: [
							{
								component: 'p',
								children: [
									{
										component: 'text',
										content:
											'Seit Oktober 2019 gilt eine Bausperre für die Ortskerne von Oberlaa und Unterlaa, um die historischen Gebäude zu erhalten.'
									}
								]
							}
						]
					},
					{
						component: 'img',
						props: {
							src: '/images/pattern/cards/parkpickerl-prater.jpg',
							width: '350',
							height: '197',
							slot: 'media'
						}
					}
				]
			},
			{
				component: 'wm-card',
				props: {
					size: 'm',
					blocklink: '',
					class: '',
					inert: ''
				},
				children: [
					{
						component: 'h3',
						props: {
							slot: 'heading'
						},
						children: [
							{
								component: 'a',
								props: {
									href: '#'
								},
								children: [
									{
										component: 'text',
										content: 'aspern Die Seestadt Wiens'
									}
								]
							}
						]
					},
					{
						component: 'div',
						props: {
							slot: 'content'
						},
						children: [
							{
								component: 'p',
								children: [
									{
										component: 'text',
										content:
											'In mehreren Etappen entstehen im 22. Bezirk hochwertiger Wohnraum für mehr als 25.000 Menschen und über 20.000 Arbeits- und Ausbildungsplätze.'
									}
								]
							}
						]
					},
					{
						component: 'img',
						props: {
							src: '/images/pattern/cards/parkpickerl-prater.jpg',
							width: '350',
							height: '197',
							slot: 'media'
						}
					}
				]
			},
			{
				component: 'wm-card',
				props: {
					size: 'm',
					blocklink: '',
					class: '',
					inert: ''
				},
				children: [
					{
						component: 'h3',
						props: {
							slot: 'heading'
						},
						children: [
							{
								component: 'a',
								props: {
									href: '#'
								},
								children: [
									{
										component: 'text',
										content: 'Erzherzog-Karl-Straße Süd - Lebenswertes Wohnquartier'
									}
								]
							}
						]
					},
					{
						component: 'div',
						props: {
							slot: 'content'
						},
						children: [
							{
								component: 'p',
								children: [
									{
										component: 'text',
										content:
											'Auf dem rund 19 Hektar großen Gebiet "Erzherzog-Karl-Straße Süd" im 22. Bezirk soll ein Wohnquartier mit Grün- und Freiräumen entstehen.'
									}
								]
							}
						]
					},
					{
						component: 'img',
						props: {
							src: '/images/pattern/cards/parkpickerl-prater.jpg',
							width: '350',
							height: '197',
							slot: 'media'
						}
					}
				]
			},
			{
				component: 'wm-card',
				props: {
					size: 'm',
					blocklink: '',
					class: 'last',
					inert: ''
				},
				children: [
					{
						component: 'h3',
						props: {
							slot: 'heading'
						},
						children: [
							{
								component: 'a',
								props: {
									href: '#'
								},
								children: [
									{
										component: 'text',
										content: 'Oberlaa und Umgebung'
									}
								]
							}
						]
					},
					{
						component: 'div',
						props: {
							slot: 'content'
						},
						children: [
							{
								component: 'p',
								children: [
									{
										component: 'text',
										content:
											'Seit Oktober 2019 gilt eine Bausperre für die Ortskerne von Oberlaa und Unterlaa, um die historischen Gebäude zu erhalten.'
									}
								]
							}
						]
					},
					{
						component: 'img',
						props: {
							src: '/images/pattern/cards/parkpickerl-prater.jpg',
							width: '350',
							height: '197',
							slot: 'media'
						}
					}
				]
			}
		]
	}
});

export const templateToAchieveStore = writable({
	kindergartenData: {
		component: 'main',
		children: [
			{
				component: 'div',
				props: {
					id: 'content',
					tabindex: '-1'
				},
				children: [
					{
						component: 'h1',
						props: {
							slot: 'heading'
						},
						children: [
							{
								component: 'text',
								content: 'Alle Kindergärten'
							}
						]
					},
					{
						component: 'wm-section',
						props: {
							contentsize: 'text'
						},
						children: [
							{
								component: 'wm-stack',
								props: {
									vertical: 'true',
									gap: 's',
									grow: 'true',
									equal: 'true'
								},
								children: [
									{
										component: 'form',
										children: [
											{
												component: 'label',
												props: {
													for: 'term'
												},
												children: [
													{
														component: 'text',
														content: 'Kindergarten finden'
													}
												]
											},
											{
												component: 'input',
												props: {
													type: 'text',
													id: 'term',
													placeholder: 'z.B. PLZ, Wohnadresse, Name des Kindergartens...'
												}
											}
										]
									},
									{
										component: 'wm-stack',
										props: {
											vertical: 'false',
											gap: 's',
											grow: 'true',
											equal: 'true'
										},
										children: [
											{
												component: 'form',
												props: {
													class: 'filter-form'
												},
												children: [
													{
														component: 'wm-filter',
														props: {
															id: 'meinfilter3',
															type: 'dropdown',
															label: 'Filter',
															searchlabel: 'Anwenden',
															dismisslabel: 'Abbrechen'
														},
														children: [
															{
																component: 'strong',
																props: {
																	'aria-hidden': 'true'
																},
																children: [
																	{
																		component: 'text',
																		content: 'Filter'
																	}
																]
															},
															{
																component: 'div',
																props: {
																	class: 'filter-dropdown-wrapper'
																},
																children: [
																	{
																		component: 'button',
																		props: {
																			class: 'filter-dropdown-button',
																			type: 'button',
																			'aria-expanded': ''
																		},
																		children: [
																			{
																				component: 'text',
																				content: 'Filter'
																			}
																		]
																	},
																	{
																		component: 'div',
																		props: {
																			class: 'filter-dropdown-content',
																			hidden: ''
																		},
																		children: [
																			{
																				component: 'wm-stack',
																				props: {
																					vertical: 'true',
																					gap: 'xs',
																					grow: 'true',
																					equal: 'true'
																				},
																				children: [
																					{
																						component: 'div',
																						children: [
																							{
																								component: 'div',
																								props: {
																									class: 'list'
																								},
																								children: [
																									{
																										component: 'input',
																										props: {
																											type: 'checkbox',
																											class: 'check-all',
																											indeterminate: 'true',
																											id: 'check_0'
																										}
																									},
																									{
																										component: 'label',
																										props: {
																											class: 'wm-h-vh',
																											for: 'check_0'
																										},
																										children: [
																											{
																												component: 'text',
																												content: 'Träger'
																											}
																										]
																									},
																									{
																										component: 'wm-toggle',
																										props: {
																											full: ''
																										},
																										children: [
																											{
																												component: 'span',
																												props: {
																													slot: 'label'
																												},
																												children: [
																													{
																														component: 'strong',
																														children: [
																															{
																																component: 'text',
																																content: 'Träger'
																															}
																														]
																													}
																												]
																											},
																											{
																												component: 'div',
																												props: {
																													slot: 'content'
																												},
																												children: [
																													{
																														component: 'fieldset',
																														children: [
																															{
																																component: 'legend',
																																props: {
																																	class: 'wm-h-vh'
																																},
																																children: [
																																	{
																																		component: 'text',
																																		content: 'Träger'
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '0'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: 'Städtisch'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk14',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk14',
																																			'data-index': '0'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk14'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: 'Privat'
																																			}
																																		]
																																	}
																																]
																															}
																														]
																													}
																												]
																											}
																										]
																									}
																								]
																							},
																							{
																								component: 'div',
																								props: {
																									class: 'list'
																								},
																								children: [
																									{
																										component: 'input',
																										props: {
																											type: 'checkbox',
																											class: 'check-all',
																											indeterminate: 'true',
																											id: 'check_1'
																										}
																									},
																									{
																										component: 'label',
																										props: {
																											class: 'wm-h-vh',
																											for: 'check_1'
																										},
																										children: [
																											{
																												component: 'text',
																												content: 'Bezirk'
																											}
																										]
																									},
																									{
																										component: 'wm-toggle',
																										props: {
																											full: ''
																										},
																										children: [
																											{
																												component: 'span',
																												props: {
																													slot: 'label'
																												},
																												children: [
																													{
																														component: 'strong',
																														children: [
																															{
																																component: 'text',
																																content: 'Bezirk'
																															}
																														]
																													}
																												]
																											},
																											{
																												component: 'div',
																												props: {
																													slot: 'content'
																												},
																												children: [
																													{
																														component: 'fieldset',
																														children: [
																															{
																																component: 'legend',
																																props: {
																																	class: 'wm-h-vh'
																																},
																																children: [
																																	{
																																		component: 'text',
																																		content: 'Bezirk'
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk1',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk1',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk1'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '1.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk2',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk2',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk2'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '2.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk3',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk3',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk3'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '3.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk4',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk4',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk4'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '4.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk5',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk5',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk5'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '5.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk6',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk6',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk6'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '6.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk7',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk7',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk7'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '7.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk8',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk8',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk8'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '8.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk9',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk9',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk9'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '9.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk10',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk10',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk10'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '10.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk11',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk11',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk11'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '11.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk12',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk12',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk12'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '12.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '13.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk14',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk14',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk14'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '14.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk15',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk15',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk15'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '15.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk16',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk16',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk16'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '16.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk17',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk17',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk17'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '17.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk18',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk18',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk18'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '18.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk19',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk19',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk19'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '19.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk20',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk20',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk20'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '20.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk21',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk21',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk21'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '21.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk22',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk22',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk22'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '22.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	},
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk23',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk23',
																																			'data-index': '1'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk23'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '23.'
																																			}
																																		]
																																	},
																																	{
																																		component: 'br'
																																	}
																																]
																															}
																														]
																													}
																												]
																											}
																										]
																									}
																								]
																							},
																							{
																								component: 'div',
																								props: {
																									class: 'list'
																								},
																								children: [
																									{
																										component: 'input',
																										props: {
																											type: 'checkbox',
																											class: 'check-all',
																											indeterminate: 'true',
																											id: 'check_2'
																										}
																									},
																									{
																										component: 'label',
																										props: {
																											class: 'wm-h-vh',
																											for: 'check_2'
																										},
																										children: [
																											{
																												component: 'text',
																												content: 'Betreuung'
																											}
																										]
																									},
																									{
																										component: 'wm-toggle',
																										props: {
																											full: ''
																										},
																										children: [
																											{
																												component: 'span',
																												props: {
																													slot: 'label'
																												},
																												children: [
																													{
																														component: 'strong',
																														children: [
																															{
																																component: 'text',
																																content: 'Betreuung'
																															}
																														]
																													}
																												]
																											},
																											{
																												component: 'div',
																												props: {
																													slot: 'content'
																												},
																												children: [
																													{
																														component: 'fieldset',
																														children: [
																															{
																																component: 'legend',
																																props: {
																																	class: 'wm-h-vh'
																																},
																																children: [
																																	{
																																		component: 'text',
																																		content: 'Betreuung'
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '2'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: 'Kleinkindergruppe'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '2'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content:
																																					'Kindergartengruppe'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '2'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: 'Hort'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '2'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: 'Tagesmutter'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '2'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: 'Kindergruppe'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '2'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content:
																																					'Integrationskindergarten'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '2'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: 'Integrationshort'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '2'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content:
																																					'Heilpädagogischer Kindergarten'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '2'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content:
																																					'Heilpädagogischer Hort'
																																			}
																																		]
																																	}
																																]
																															}
																														]
																													}
																												]
																											}
																										]
																									}
																								]
																							},
																							{
																								component: 'div',
																								props: {
																									class: 'list'
																								},
																								children: [
																									{
																										component: 'input',
																										props: {
																											type: 'checkbox',
																											class: 'check-all',
																											indeterminate: 'true',
																											id: 'check_3'
																										}
																									},
																									{
																										component: 'label',
																										props: {
																											class: 'wm-h-vh',
																											for: 'check_3'
																										},
																										children: [
																											{
																												component: 'text',
																												content: 'Alter'
																											}
																										]
																									},
																									{
																										component: 'wm-toggle',
																										props: {
																											full: ''
																										},
																										children: [
																											{
																												component: 'span',
																												props: {
																													slot: 'label'
																												},
																												children: [
																													{
																														component: 'strong',
																														children: [
																															{
																																component: 'text',
																																content: 'Alter'
																															}
																														]
																													}
																												]
																											},
																											{
																												component: 'div',
																												props: {
																													slot: 'content'
																												},
																												children: [
																													{
																														component: 'fieldset',
																														children: [
																															{
																																component: 'legend',
																																props: {
																																	class: 'wm-h-vh'
																																},
																																children: [
																																	{
																																		component: 'text',
																																		content: 'Alter'
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '3'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '0-3'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '3'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '0-6'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '3'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '0-10'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '3'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '2-6'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'bezirk13',
																																			type: 'checkbox',
																																			name: 'bezirk1[]',
																																			value: 'bezirk13',
																																			'data-index': '3'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'bezirk13'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: '6-10'
																																			}
																																		]
																																	}
																																]
																															}
																														]
																													}
																												]
																											}
																										]
																									}
																								]
																							},
																							{
																								component: 'div',
																								props: {
																									class: 'list'
																								},
																								children: [
																									{
																										component: 'input',
																										props: {
																											type: 'checkbox',
																											class: 'check-all',
																											indeterminate: 'true',
																											id: 'check_4'
																										}
																									},
																									{
																										component: 'label',
																										props: {
																											class: 'wm-h-vh',
																											for: 'check_4'
																										},
																										children: [
																											{
																												component: 'text',
																												content: 'Allgemeines'
																											}
																										]
																									},
																									{
																										component: 'wm-toggle',
																										props: {
																											full: ''
																										},
																										children: [
																											{
																												component: 'span',
																												props: {
																													slot: 'label'
																												},
																												children: [
																													{
																														component: 'strong',
																														children: [
																															{
																																component: 'text',
																																content: 'Allgemeines'
																															}
																														]
																													}
																												]
																											},
																											{
																												component: 'div',
																												props: {
																													slot: 'content'
																												},
																												children: [
																													{
																														component: 'fieldset',
																														children: [
																															{
																																component: 'legend',
																																props: {
																																	class: 'wm-h-vh'
																																},
																																children: [
																																	{
																																		component: 'text',
																																		content: 'Allgemeines'
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'hallenbad3',
																																			type: 'checkbox',
																																			name: 'typ1[]',
																																			value: 'hallenbad3',
																																			'data-index': '4'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'hallenbad3'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: 'Barrierefrei'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'hallenbad3',
																																			type: 'checkbox',
																																			name: 'typ1[]',
																																			value: 'hallenbad3',
																																			'data-index': '4'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'hallenbad3'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: 'Garten'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'hallenbad3',
																																			type: 'checkbox',
																																			name: 'typ1[]',
																																			value: 'hallenbad3',
																																			'data-index': '4'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'hallenbad3'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: 'Bilingual'
																																			}
																																		]
																																	}
																																]
																															},
																															{
																																component: 'div',
																																children: [
																																	{
																																		component: 'input',
																																		props: {
																																			id: 'hallenbad3',
																																			type: 'checkbox',
																																			name: 'typ1[]',
																																			value: 'hallenbad3',
																																			'data-index': '4'
																																		}
																																	},
																																	{
																																		component: 'label',
																																		props: {
																																			for: 'hallenbad3'
																																		},
																																		children: [
																																			{
																																				component: 'text',
																																				content: 'Kinderwagenraum'
																																			}
																																		]
																																	}
																																]
																															}
																														]
																													}
																												]
																											}
																										]
																									}
																								]
																							}
																						]
																					}
																				]
																			}
																		]
																	}
																]
															},
															{
																component: 'slot'
															}
														]
													}
												]
											},
											{
												component: 'form',
												props: {
													class: 'filter-form'
												},
												children: [
													{
														component: 'label',
														props: {
															style: 'margin: 0'
														},
														children: [
															{
																component: 'text',
																content: 'Sortierung'
															}
														]
													},
													{
														component: 'select',
														props: {
															name: 'sortierung',
															id: 'sortierung'
														},
														children: [
															{
																component: 'option',
																props: {
																	value: 'alphabetisch'
																},
																children: [
																	{
																		component: 'text',
																		content: 'Alphabetisch'
																	}
																]
															},
															{
																component: 'option',
																props: {
																	value: 'bezirke'
																},
																children: [
																	{
																		component: 'text',
																		content: 'Bezirke'
																	}
																]
															}
														]
													}
												]
											}
										]
									},
									{
										component: 'wm-button',
										props: {
											kind: 'primary'
										},
										children: [
											{
												component: 'button',
												children: [
													{
														component: 'text',
														content: 'Anwenden'
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						component: 'wm-section',
						props: {
							contentsize: 'full'
						},
						children: [
							{
								component: 'label',
								props: {
									for: 'term'
								},
								children: [
									{
										component: 'text',
										content: 'Ansicht'
									}
								]
							},
							{
								component: 'wm-tabs',
								props: {
									clean: 'true',
									class: 'pl-tabs'
								},
								children: [
									{
										component: 'wm-tab',
										props: {
											selected: '',
											role: 'tab',
											'aria-selected': 'true',
											tabindex: '0',
											slot: 'tab'
										},
										children: [
											{
												component: 'text',
												content: 'Kacheln'
											}
										]
									},
									{
										component: 'wm-tabpanel',
										props: {
											selected: '',
											role: 'tabpanel',
											'aria-hidden': 'false'
										},
										children: [
											{
												component: 'wm-grid',
												props: {
													gap: 'default',
													size: 'm'
												},
												children: [
													{
														component: 'wm-card',
														props: {
															blocklink: 'false',
															size: 'm'
														},
														children: [
															{
																component: 'h2',
																props: {
																	slot: 'heading'
																},
																children: [
																	{
																		component: 'a',
																		props: {
																			href: '/detailseite-staedtisch'
																		},
																		children: [
																			{
																				component: 'text',
																				content: 'Bildungscampus Marianne-Pollak-Gasse 2'
																			}
																		]
																	}
																]
															},
															{
																component: 'div',
																props: {
																	slot: 'content'
																},
																children: [
																	{
																		component: 'wm-badge',
																		children: [
																			{
																				component: 'text',
																				content: 'Städtisch'
																			}
																		]
																	}
																]
															},
															{
																component: 'div',
																props: {
																	class: 'text',
																	slot: 'content'
																},
																children: [
																	{
																		component: 'wm-list',
																		props: {
																			clean: 'true',
																			type: 'default',
																			separator: 'none'
																		},
																		children: [
																			{
																				component: 'ul',
																				children: [
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'pin',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Ort:'
																											}
																										]
																									},
																									{
																										component: 'text',
																										content: 'Marianne-Pollak-Gasse 2, 1010'
																									}
																								]
																							}
																						]
																					},
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'contact',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Telefon:'
																											}
																										]
																									},
																									{
																										component: 'a',
																										props: {
																											href: 'tel:0043676811861453'
																										},
																										children: [
																											{
																												component: 'text',
																												content: '+43 676 811 861 453'
																											}
																										]
																									}
																								]
																							}
																						]
																					}
																				]
																			}
																		]
																	}
																]
															},
															{
																component: 'img',
																props: {
																	src: '/media/images/kiga-1.png',
																	width: '350',
																	height: '197',
																	slot: 'media'
																}
															}
														]
													},
													{
														component: 'wm-card',
														props: {
															blocklink: 'false',
															size: 'm'
														},
														children: [
															{
																component: 'h2',
																props: {
																	slot: 'heading'
																},
																children: [
																	{
																		component: 'a',
																		props: {
																			href: '/detailseite-privat'
																		},
																		children: [
																			{
																				component: 'text',
																				content: 'KIWI - Kindergarten'
																			}
																		]
																	}
																]
															},
															{
																component: 'div',
																props: {
																	slot: 'content'
																},
																children: [
																	{
																		component: 'wm-badge',
																		children: [
																			{
																				component: 'text',
																				content: 'Privat'
																			}
																		]
																	}
																]
															},
															{
																component: 'div',
																props: {
																	class: 'text',
																	slot: 'content'
																},
																children: [
																	{
																		component: 'wm-list',
																		props: {
																			clean: 'true',
																			type: 'default',
																			separator: 'none'
																		},
																		children: [
																			{
																				component: 'ul',
																				children: [
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'info',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Träger:'
																											}
																										]
																									},
																									{
																										component: 'text',
																										content: 'Kinder in Wien'
																									}
																								]
																							}
																						]
																					},
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'pin',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Ort:'
																											}
																										]
																									},
																									{
																										component: 'text',
																										content: 'Am Grünen Prater 9, 1020'
																									}
																								]
																							}
																						]
																					},
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'contact',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Telefon:'
																											}
																										]
																									},
																									{
																										component: 'a',
																										props: {
																											href: 'tel:0043676811861453'
																										},
																										children: [
																											{
																												component: 'text',
																												content: '+43 676 811 861 453'
																											}
																										]
																									}
																								]
																							}
																						]
																					}
																				]
																			}
																		]
																	}
																]
															},
															{
																component: 'img',
																props: {
																	src: '/media/images/kiga-2.png',
																	width: '350',
																	height: '197',
																	slot: 'media'
																}
															}
														]
													},
													{
														component: 'wm-card',
														props: {
															blocklink: 'false',
															size: 'm'
														},
														children: [
															{
																component: 'h2',
																props: {
																	slot: 'heading'
																},
																children: [
																	{
																		component: 'a',
																		props: {
																			href: '/detailseite-staedtisch'
																		},
																		children: [
																			{
																				component: 'text',
																				content: 'Jungstraße 1'
																			}
																		]
																	}
																]
															},
															{
																component: 'div',
																props: {
																	slot: 'content'
																},
																children: [
																	{
																		component: 'wm-badge',
																		children: [
																			{
																				component: 'text',
																				content: 'Städtisch'
																			}
																		]
																	}
																]
															},
															{
																component: 'div',
																props: {
																	class: 'text',
																	slot: 'content'
																},
																children: [
																	{
																		component: 'wm-list',
																		props: {
																			clean: 'true',
																			type: 'default',
																			separator: 'none'
																		},
																		children: [
																			{
																				component: 'ul',
																				children: [
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'pin',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Ort:'
																											}
																										]
																									},
																									{
																										component: 'text',
																										content: 'Jungstraße 1, 1020'
																									}
																								]
																							}
																						]
																					},
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'contact',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Telefon:'
																											}
																										]
																									},
																									{
																										component: 'a',
																										props: {
																											href: 'tel:0043676811861453'
																										},
																										children: [
																											{
																												component: 'text',
																												content: '+43 676 811 861 453'
																											}
																										]
																									}
																								]
																							}
																						]
																					}
																				]
																			}
																		]
																	}
																]
															},
															{
																component: 'img',
																props: {
																	src: '/media/images/kiga-3.png',
																	width: '350',
																	height: '197',
																	slot: 'media'
																}
															}
														]
													},
													{
														component: 'wm-card',
														props: {
															blocklink: 'false',
															size: 'm'
														},
														children: [
															{
																component: 'h2',
																props: {
																	slot: 'heading'
																},
																children: [
																	{
																		component: 'a',
																		props: {
																			href: '/detailseite-staedtisch'
																		},
																		children: [
																			{
																				component: 'text',
																				content: 'Am Stadtpark 4'
																			}
																		]
																	}
																]
															},
															{
																component: 'div',
																props: {
																	slot: 'content'
																},
																children: [
																	{
																		component: 'wm-badge',
																		children: [
																			{
																				component: 'text',
																				content: 'Städtisch'
																			}
																		]
																	}
																]
															},
															{
																component: 'div',
																props: {
																	class: 'text',
																	slot: 'content'
																},
																children: [
																	{
																		component: 'wm-list',
																		props: {
																			clean: 'true',
																			type: 'default',
																			separator: 'none'
																		},
																		children: [
																			{
																				component: 'ul',
																				children: [
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'pin',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Ort:'
																											}
																										]
																									},
																									{
																										component: 'text',
																										content: 'Am Stadtpark 4, 1030'
																									}
																								]
																							}
																						]
																					},
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'contact',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Telefon:'
																											}
																										]
																									},
																									{
																										component: 'a',
																										props: {
																											href: 'tel:0043676811864732'
																										},
																										children: [
																											{
																												component: 'text',
																												content: '+43 676 811 864 732'
																											}
																										]
																									}
																								]
																							}
																						]
																					}
																				]
																			}
																		]
																	}
																]
															},
															{
																component: 'img',
																props: {
																	src: '/media/images/kiga-4.png',
																	width: '350',
																	height: '197',
																	slot: 'media'
																}
															}
														]
													},
													{
														component: 'wm-card',
														props: {
															blocklink: 'false',
															size: 'm'
														},
														children: [
															{
																component: 'h2',
																props: {
																	slot: 'heading'
																},
																children: [
																	{
																		component: 'a',
																		props: {
																			href: '/detailseite-staedtisch'
																		},
																		children: [
																			{
																				component: 'text',
																				content: 'Kindergruppe Amina'
																			}
																		]
																	}
																]
															},
															{
																component: 'div',
																props: {
																	slot: 'content'
																},
																children: [
																	{
																		component: 'wm-badge',
																		children: [
																			{
																				component: 'text',
																				content: 'Privat'
																			}
																		]
																	}
																]
															},
															{
																component: 'div',
																props: {
																	class: 'text',
																	slot: 'content'
																},
																children: [
																	{
																		component: 'wm-list',
																		props: {
																			clean: 'true',
																			type: 'default',
																			separator: 'none'
																		},
																		children: [
																			{
																				component: 'ul',
																				children: [
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'info',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Träger:'
																											}
																										]
																									},
																									{
																										component: 'text',
																										content: 'Kinder in Wien'
																									}
																								]
																							}
																						]
																					},
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'pin',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Ort:'
																											}
																										]
																									},
																									{
																										component: 'text',
																										content: 'Baumgasse 31, 1030'
																									}
																								]
																							}
																						]
																					},
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'contact',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Telefon:'
																											}
																										]
																									},
																									{
																										component: 'a',
																										props: {
																											href: 'tel:00436642263138'
																										},
																										children: [
																											{
																												component: 'text',
																												content: '+43 664 22 63 138'
																											}
																										]
																									}
																								]
																							}
																						]
																					}
																				]
																			}
																		]
																	}
																]
															},
															{
																component: 'img',
																props: {
																	src: '/media/images/kiga-5.png',
																	width: '350',
																	height: '197',
																	slot: 'media'
																}
															}
														]
													},
													{
														component: 'wm-card',
														props: {
															blocklink: 'false',
															size: 'm'
														},
														children: [
															{
																component: 'h2',
																props: {
																	slot: 'heading'
																},
																children: [
																	{
																		component: 'a',
																		props: {
																			href: '/detailseite-staedtisch'
																		},
																		children: [
																			{
																				component: 'text',
																				content: 'Marxergasse 12'
																			}
																		]
																	}
																]
															},
															{
																component: 'div',
																props: {
																	slot: 'content'
																},
																children: [
																	{
																		component: 'wm-badge',
																		children: [
																			{
																				component: 'text',
																				content: 'Städtisch'
																			}
																		]
																	}
																]
															},
															{
																component: 'div',
																props: {
																	class: 'text',
																	slot: 'content'
																},
																children: [
																	{
																		component: 'wm-list',
																		props: {
																			clean: 'true',
																			type: 'default',
																			separator: 'none'
																		},
																		children: [
																			{
																				component: 'ul',
																				children: [
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'pin',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Ort:'
																											}
																										]
																									},
																									{
																										component: 'text',
																										content: 'Marxergasse 12, 1020'
																									}
																								]
																							}
																						]
																					},
																					{
																						component: 'li',
																						children: [
																							{
																								component: 'wm-icon',
																								props: {
																									iconid: 'contact',
																									width: '28',
																									height: '28'
																								}
																							},
																							{
																								component: 'div',
																								children: [
																									{
																										component: 'strong',
																										children: [
																											{
																												component: 'text',
																												content: 'Telefon:'
																											}
																										]
																									},
																									{
																										component: 'a',
																										props: {
																											href: 'tel:0043676811861453'
																										},
																										children: [
																											{
																												component: 'text',
																												content: '+43 676 811 861 453'
																											}
																										]
																									}
																								]
																							}
																						]
																					}
																				]
																			}
																		]
																	}
																]
															},
															{
																component: 'img',
																props: {
																	src: '/media/images/kiga-6.png',
																	width: '350',
																	height: '197',
																	slot: 'media'
																}
															}
														]
													}
												]
											}
										]
									},
									{
										component: 'wm-tab',
										props: {
											role: 'tab',
											'aria-selected': 'false',
											tabindex: '-1',
											slot: 'tab'
										},
										children: [
											{
												component: 'text',
												content: 'Karte'
											}
										]
									},
									{
										component: 'wm-tabpanel',
										props: {
											role: 'tabpanel',
											'aria-hidden': 'true'
										},
										children: [
											{
												component: 'img',
												props: {
													class: 'wm-image',
													loading: 'lazy',
													src: '/media/images/karte-ma10.png',
													'data-src': '/media/images/karte-ma10.png',
													alt: 'Bildbeschreibung'
												}
											},
											{
												component: 'noscript',
												children: [
													{
														component: 'text',
														content:
															'<img class="" src="/media/images/karte-ma10.png" alt="Bildbeschreibung">'
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	}
});

export const collectionStore = writable({
	testCollectionData: {
		component: 'main',
		children: [
			{
				component: 'wm-stage',
				children: [
					{
						component: 'h1',
						props: {
							slot: 'heading'
						},
						children: [
							{
								component: 'text',
								content: 'Call To Action'
							}
						]
					}
				]
			},
			{
				component: 'section',
				children: [
					{
						component: 'wm-tag-list',
						children: [
							{
								component: 'ul',
								children: [
									{
										component: 'li',
										children: [
											{
												component: 'wm-tag',
												props: {
													color: ''
												}
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				component: 'section',
				children: [
					{
						component: 'wm-tabs',
						props: {
							class: 'pl-tabs'
						},
						children: [
							{
								component: 'wm-tab',
								props: {
									selected: '',
									role: 'tab',
									'aria-selected': 'true',
									tabindex: '0',
									slot: 'tab'
								},
								children: [
									{
										component: 'text',
										content: 'Demo'
									}
								]
							},
							{
								component: 'wm-tabpanel',
								props: {
									class: 'settings-and-demo',
									selected: '',
									role: 'tabpanel',
									'aria-hidden': 'false'
								},
								children: [
									{
										component: 'wm-stack',
										props: {
											vertical: '',
											gap: 's',
											grow: 'true',
											equal: 'true'
										},
										children: [
											{
												component: 'p'
											},
											{
												component: 'p',
												children: [
													{
														component: 'text',
														content:
															'Hervorgehobene Links heben sich von einfachen Links durch die Textformatierung, einen angestellten Pfeil und die Animation dessen hervor.'
													}
												]
											},
											{
												component: 'p'
											},
											{
												component: 'div',
												props: {
													class: 'wm-h-row'
												},
												children: [
													{
														component: 'h2',
														children: [
															{
																component: 'text',
																content: 'Einstellungen'
															}
														]
													},
													{
														component: 'wm-highlight',
														props: {
															color: 'nebelgrau-light',
															type: ''
														},
														children: [
															{
																component: 'form',
																props: {
																	'data-selector': 'wm-cta-preview',
																	'data-prev-selector': 'wm-cta-preview',
																	class: 'pl-demo'
																},
																children: [
																	{
																		component: 'wm-stack',
																		props: {
																			equal: 'false',
																			grow: 'false',
																			gapx: 'm',
																			gapy: 'xs',
																			wrap: 'true',
																			gap: 's'
																		},
																		children: [
																			{
																				component: 'div',
																				children: [
																					{
																						component: 'input',
																						props: {
																							type: 'checkbox',
																							id: 'wm-cta_full',
																							'data-attribute': 'full',
																							'data-selector': '',
																							'data-slot': '',
																							'data-dependency': '',
																							autocomplete: 'off'
																						}
																					},
																					{
																						component: 'label',
																						props: {
																							for: 'wm-cta_full'
																						},
																						children: [
																							{
																								component: 'text',
																								content: 'Voll Breite'
																							}
																						]
																					}
																				]
																			},
																			{
																				component: 'div',
																				children: [
																					{
																						component: 'input',
																						props: {
																							type: 'checkbox',
																							id: 'wm-cta_start',
																							'data-attribute': 'start',
																							'data-selector': '',
																							'data-slot': '',
																							'data-dependency': '',
																							autocomplete: 'off'
																						}
																					},
																					{
																						component: 'label',
																						props: {
																							for: 'wm-cta_start'
																						},
																						children: [
																							{
																								component: 'text',
																								content: 'Pfeil Links'
																							}
																						]
																					}
																				]
																			}
																		]
																	}
																]
															}
														]
													}
												]
											},
											{
												component: 'section',
												children: [
													{
														component: 'wm-anchor',
														children: [
															{
																component: 'h2',
																props: {
																	id: 'demo'
																},
																children: [
																	{
																		component: 'text',
																		content: 'Demo'
																	}
																]
															}
														]
													},
													{
														component: 'wm-tabs',
														props: {
															class: 'pl-tabs pl-samples'
														},
														children: [
															{
																component: 'wm-tab',
																props: {
																	role: 'tab',
																	'aria-selected': 'false',
																	tabindex: '-1',
																	slot: 'tab'
																},
																children: [
																	{
																		component: 'text',
																		content: 'Vorschau'
																	}
																]
															},
															{
																component: 'wm-tabpanel',
																props: {
																	class: 'code-preview-rendered',
																	role: 'tabpanel',
																	'aria-hidden': 'true'
																},
																children: [
																	{
																		component: 'wm-cta',
																		props: {
																			'data-demo-pattern': 'wm-cta-preview',
																			full: 'false',
																			start: 'false',
																			clean: 'false'
																		},
																		children: [
																			{
																				component: 'a',
																				props: {
																					href: '#'
																				},
																				children: [
																					{
																						component: 'text',
																						content: 'Mehr erfahren'
																					}
																				]
																			}
																		]
																	}
																]
															},
															{
																component: 'wm-tab',
																props: {
																	selected: '',
																	role: 'tab',
																	'aria-selected': 'true',
																	tabindex: '0',
																	slot: 'tab'
																},
																children: [
																	{
																		component: 'text',
																		content: 'Code'
																	}
																]
															},
															{
																component: 'wm-tabpanel',
																props: {
																	selected: '',
																	role: 'tabpanel',
																	'aria-hidden': 'false'
																},
																children: [
																	{
																		component: 'div',
																		props: {
																			class: 'code-preview'
																		},
																		children: [
																			{
																				component: 'pre',
																				props: {
																					class: 'language-html'
																				},
																				children: [
																					{
																						component: 'code',
																						props: {
																							class: 'language-html'
																						},
																						children: [
																							{
																								component: 'span',
																								props: {
																									class: 'token tag'
																								},
																								children: [
																									{
																										component: 'span',
																										props: {
																											class: 'token tag'
																										},
																										children: [
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '<'
																													}
																												]
																											},
																											{
																												component: 'text',
																												content: 'wm-cta'
																											}
																										]
																									},
																									{
																										component: 'span',
																										props: {
																											class: 'token attr-name'
																										},
																										children: [
																											{
																												component: 'text',
																												content: 'full'
																											}
																										]
																									},
																									{
																										component: 'span',
																										props: {
																											class: 'token attr-value'
																										},
																										children: [
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation attr-equals'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '='
																													}
																												]
																											},
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '"'
																													}
																												]
																											},
																											{
																												component: 'text',
																												content: 'false'
																											},
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '"'
																													}
																												]
																											}
																										]
																									},
																									{
																										component: 'span',
																										props: {
																											class: 'token attr-name'
																										},
																										children: [
																											{
																												component: 'text',
																												content: 'start'
																											}
																										]
																									},
																									{
																										component: 'span',
																										props: {
																											class: 'token attr-value'
																										},
																										children: [
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation attr-equals'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '='
																													}
																												]
																											},
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '"'
																													}
																												]
																											},
																											{
																												component: 'text',
																												content: 'false'
																											},
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '"'
																													}
																												]
																											}
																										]
																									},
																									{
																										component: 'span',
																										props: {
																											class: 'token attr-name'
																										},
																										children: [
																											{
																												component: 'text',
																												content: 'clean'
																											}
																										]
																									},
																									{
																										component: 'span',
																										props: {
																											class: 'token attr-value'
																										},
																										children: [
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation attr-equals'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '='
																													}
																												]
																											},
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '"'
																													}
																												]
																											},
																											{
																												component: 'text',
																												content: 'false'
																											},
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '"'
																													}
																												]
																											}
																										]
																									},
																									{
																										component: 'span',
																										props: {
																											class: 'token punctuation'
																										},
																										children: [
																											{
																												component: 'text',
																												content: '>'
																											}
																										]
																									}
																								]
																							},
																							{
																								component: 'span',
																								props: {
																									class: 'token tag'
																								},
																								children: [
																									{
																										component: 'span',
																										props: {
																											class: 'token tag'
																										},
																										children: [
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '<'
																													}
																												]
																											},
																											{
																												component: 'text',
																												content: 'a'
																											}
																										]
																									},
																									{
																										component: 'span',
																										props: {
																											class: 'token attr-name'
																										},
																										children: [
																											{
																												component: 'text',
																												content: 'href'
																											}
																										]
																									},
																									{
																										component: 'span',
																										props: {
																											class: 'token attr-value'
																										},
																										children: [
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation attr-equals'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '='
																													}
																												]
																											},
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '"'
																													}
																												]
																											},
																											{
																												component: 'text',
																												content: '#'
																											},
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '"'
																													}
																												]
																											}
																										]
																									},
																									{
																										component: 'span',
																										props: {
																											class: 'token punctuation'
																										},
																										children: [
																											{
																												component: 'text',
																												content: '>'
																											}
																										]
																									}
																								]
																							},
																							{
																								component: 'text',
																								content: 'Mehr erfahren'
																							},
																							{
																								component: 'span',
																								props: {
																									class: 'token tag'
																								},
																								children: [
																									{
																										component: 'span',
																										props: {
																											class: 'token tag'
																										},
																										children: [
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '</'
																													}
																												]
																											},
																											{
																												component: 'text',
																												content: 'a'
																											}
																										]
																									},
																									{
																										component: 'span',
																										props: {
																											class: 'token punctuation'
																										},
																										children: [
																											{
																												component: 'text',
																												content: '>'
																											}
																										]
																									}
																								]
																							},
																							{
																								component: 'span',
																								props: {
																									class: 'token tag'
																								},
																								children: [
																									{
																										component: 'span',
																										props: {
																											class: 'token tag'
																										},
																										children: [
																											{
																												component: 'span',
																												props: {
																													class: 'token punctuation'
																												},
																												children: [
																													{
																														component: 'text',
																														content: '</'
																													}
																												]
																											},
																											{
																												component: 'text',
																												content: 'wm-cta'
																											}
																										]
																									},
																									{
																										component: 'span',
																										props: {
																											class: 'token punctuation'
																										},
																										children: [
																											{
																												component: 'text',
																												content: '>'
																											}
																										]
																									}
																								]
																							}
																						]
																					}
																				]
																			}
																		]
																	}
																]
															}
														]
													}
												]
											}
										]
									}
								]
							},
							{
								component: 'wm-tab',
								props: {
									role: 'tab',
									'aria-selected': 'false',
									tabindex: '-1',
									slot: 'tab'
								},
								children: [
									{
										component: 'text',
										content: 'Beschreibung'
									}
								]
							},
							{
								component: 'wm-tabpanel',
								props: {
									role: 'tabpanel',
									'aria-hidden': 'true'
								},
								children: [
									{
										component: 'p',
										children: [
											{
												component: 'text',
												content:
													'Komponente zur Darstellung CTA Links oder Button, die aussehen wie Links.'
											}
										]
									},
									{
										component: 'p'
									},
									{
										component: 'p',
										children: [
											{
												component: 'text',
												content:
													'Hervorgehobene Links heben sich von einfachen Links durch die Textformatierung, einen angestellten Pfeil und die Animation dessen hervor.'
											}
										]
									},
									{
										component: 'p'
									},
									{
										component: 'p',
										children: [
											{
												component: 'text',
												content: 'link Beschreibung'
											}
										]
									}
								]
							},
							{
								component: 'wm-tab',
								props: {
									role: 'tab',
									'aria-selected': 'false',
									tabindex: '-1',
									slot: 'tab'
								},
								children: [
									{
										component: 'text',
										content: 'API'
									}
								]
							},
							{
								component: 'wm-tabpanel',
								props: {
									role: 'tabpanel',
									'aria-hidden': 'true'
								},
								children: [
									{
										component: 'section',
										children: [
											{
												component: 'h2',
												children: [
													{
														component: 'text',
														content: 'Eigenschaften'
													}
												]
											},
											{
												component: 'table',
												children: [
													{
														component: 'colgroup',
														children: [
															{
																component: 'col',
																props: {
																	width: '180'
																}
															},
															{
																component: 'col'
															},
															{
																component: 'col',
																props: {
																	width: '450'
																}
															}
														]
													},
													{
														component: 'thead',
														children: [
															{
																component: 'tr',
																children: [
																	{
																		component: 'th',
																		children: [
																			{
																				component: 'text',
																				content: 'Eigenschaft'
																			}
																		]
																	},
																	{
																		component: 'th',
																		children: [
																			{
																				component: 'text',
																				content: 'Beschreibung'
																			}
																		]
																	},
																	{
																		component: 'th',
																		children: [
																			{
																				component: 'text',
																				content: 'Typ'
																			}
																		]
																	},
																	{
																		component: 'th',
																		children: [
																			{
																				component: 'text',
																				content: 'Default'
																			}
																		]
																	}
																]
															}
														]
													},
													{
														component: 'tbody',
														children: [
															{
																component: 'tr',
																children: [
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: 'full'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'text',
																				content: 'Über die volle Breite anzeigen'
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: 'string'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				props: {
																					style: 'word-break: normal !important'
																				},
																				children: [
																					{
																						component: 'text',
																						content: "'false'"
																					}
																				]
																			}
																		]
																	}
																]
															},
															{
																component: 'tr',
																children: [
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: 'start'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'text',
																				content: 'Pfeil auf der linken Seite'
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: 'string'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				props: {
																					style: 'word-break: normal !important'
																				},
																				children: [
																					{
																						component: 'text',
																						content: "'false'"
																					}
																				]
																			}
																		]
																	}
																]
															},
															{
																component: 'tr',
																children: [
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: 'clean'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'text',
																				content:
																					'Reset Font styles, damit Inhalt  der Komponente Font styles steuert'
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: 'string'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				props: {
																					style: 'word-break: normal !important'
																				},
																				children: [
																					{
																						component: 'text',
																						content: "'false'"
																					}
																				]
																			}
																		]
																	}
																]
															}
														]
													}
												]
											}
										]
									},
									{
										component: 'section',
										children: [
											{
												component: 'h2',
												children: [
													{
														component: 'text',
														content: 'Slots'
													}
												]
											},
											{
												component: 'table',
												children: [
													{
														component: 'colgroup',
														children: [
															{
																component: 'col',
																props: {
																	width: '180'
																}
															},
															{
																component: 'col'
															}
														]
													},
													{
														component: 'thead',
														children: [
															{
																component: 'tr',
																children: [
																	{
																		component: 'th',
																		children: [
																			{
																				component: 'text',
																				content: 'Name'
																			}
																		]
																	},
																	{
																		component: 'th',
																		children: [
																			{
																				component: 'text',
																				content: 'Beschreibung'
																			}
																		]
																	}
																]
															}
														]
													},
													{
														component: 'tbody',
														children: [
															{
																component: 'tr',
																children: [
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: 'default'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'text',
																				content: 'Link oder Button'
																			}
																		]
																	}
																]
															}
														]
													}
												]
											}
										]
									},
									{
										component: 'section',
										children: [
											{
												component: 'h2',
												children: [
													{
														component: 'text',
														content: 'CSS API'
													}
												]
											},
											{
												component: 'table',
												children: [
													{
														component: 'colgroup',
														children: [
															{
																component: 'col',
																props: {
																	width: '350'
																}
															},
															{
																component: 'col'
															}
														]
													},
													{
														component: 'thead',
														children: [
															{
																component: 'tr',
																children: [
																	{
																		component: 'th',
																		children: [
																			{
																				component: 'text',
																				content: 'Property'
																			}
																		]
																	},
																	{
																		component: 'th',
																		children: [
																			{
																				component: 'text',
																				content: 'Beschreibung'
																			}
																		]
																	}
																]
															}
														]
													},
													{
														component: 'tbody',
														children: [
															{
																component: 'tr',
																children: [
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: '--cta-icon'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'text',
																				content: 'Ausrichtung der Tabs in der tablist'
																			}
																		]
																	}
																]
															},
															{
																component: 'tr',
																children: [
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: '--cta-icon-start'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'text',
																				content: 'Ausrichtung der Tabs in der tablist'
																			}
																		]
																	}
																]
															},
															{
																component: 'tr',
																children: [
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: '--cta-color-link'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'text',
																				content: 'Standard :link Farbe'
																			}
																		]
																	}
																]
															},
															{
																component: 'tr',
																children: [
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: '--cta-color-visited'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'text',
																				content: 'Standard :visited Farbe'
																			}
																		]
																	}
																]
															},
															{
																component: 'tr',
																children: [
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: '--cta-font-variation-settings'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'text',
																				content: 'Schriftstärke für WM Variablefont'
																			}
																		]
																	}
																]
															},
															{
																component: 'tr',
																children: [
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: '--cta-font-weight'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'text',
																				content: 'Standard-Schriftstärke'
																			}
																		]
																	}
																]
															},
															{
																component: 'tr',
																children: [
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: '--cta-padding'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'text',
																				content: 'Innenabstand'
																			}
																		]
																	}
																]
															},
															{
																component: 'tr',
																children: [
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'code',
																				children: [
																					{
																						component: 'text',
																						content: '--cta-padding-start'
																					}
																				]
																			}
																		]
																	},
																	{
																		component: 'td',
																		children: [
																			{
																				component: 'text',
																				content: 'Innenabstand'
																			}
																		]
																	}
																]
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				component: 'script',
				props: {
					src: '/assets/js/playground.js',
					type: 'module'
				}
			},
			{
				component: 'div',
				props: {
					role: 'status',
					class: 'wm-h-vh'
				}
			}
		]
	}
});

// defining the store
export const patternStore = readable([
	{
		component: WmCard,
		props: {
			dataDemoPattern: { type: 'string', defaultValue: 'wm-card-preview' },
			heading: { type: 'string', defaultValue: 'Parkpickerl im grünen Prater' },
			contentText: {
				type: 'string',
				defaultValue:
					"Seit 4. Juli gelten im Prater die <a href='#'>flächendeckende Kurzparkzone</a> und das Parkpickerl für Bezirks-Bewohner*innen."
			},
			listItems: { type: 'array', defaultValue: ['Parken', 'Parkenpickerl', 'Parken in Wien'] },
			mediaSrc: { type: 'string', defaultValue: '/images/parkpickerl-prater.jpg' },
			mediaWidth: { type: 'string', defaultValue: '350' },
			mediaHeight: { type: 'string', defaultValue: '197' },
			mediaAlt: { type: 'string', defaultValue: 'Parkpickerl im grünen Prater' },
			eyecatcher: { type: 'string', defaultValue: '-10%' },
			eyecatcherVisible: { type: 'boolean', defaultValue: false },
			size: { type: 'string', defaultValue: 'm' }
		}
	},
	{
		component: WmAccordion,
		props: {
			open: { type: 'boolean', defaultValue: false },
			multiple: { type: 'boolean', defaultValue: false },
			heading1: {
				type: 'string',
				defaultValue:
					'Ist eine Mitgliedschaft beim Vorteilsclub der Stadt Wien mit Kosten verbunden?'
			},
			content1: {
				type: 'string',
				defaultValue:
					'Nein. Die Mitgliedschaft im Vorteilsclub der Stadt Wien ist absolut kostenlos und ohne Bindung.'
			},
			heading2: {
				type: 'string',
				defaultValue: 'Wer kann Mitglied im Vorteilsclub der Stadt Wien werden?'
			},
			content2: {
				type: 'string',
				defaultValue:
					'Jede natürliche Person mit Wohnsitz in Österreich, die das 16. Lebensjahr vollendet hat.'
			}
		}
	},
	{
		component: WmCta,
		props: {
			href: { type: 'string', defaultValue: '#' },
			text: { type: 'string', defaultValue: 'Mehr erfahren' }
		}
	}
	// add more components as needed
]);
