import { writable, readable } from 'svelte/store';
import WmCard from './WmCard.svelte';
import WmAccordion from './WmAccordion.svelte';
import WmCta from './WmCta.svelte';

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
