<mvc:View controllerName="LMES.CovidTracker2021.controller.Slots" xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc" xmlns:semantic="sap.f.semantic"
	xmlns:f="sap.ui.layout.form" xmlns:l="sap.ui.layout">
	<Page id="slotsPage" showNavButton="true" navButtonPress="onNavBack" class="sapUiSizeCompact">
		<content>
			<f:SimpleForm editable="true">
				<f:content>
					<Table id="tabSlots" items="{DataSlots>/Table}" popinLayout="Block" growing="true" alternateRowColors="true" width="auto"
						fixedLayout="false">
						<headerToolbar>
							<OverflowToolbar>
								<content>
									<SearchField id="searchCentre" width="45%" liveChange="onFilterCentre" placeholder="Search Based Centre Name"></SearchField>
									<ToolbarSpacer/>
									<SearchField id="searchArea" width="45%" liveChange="onFilterArea" placeholder="Search Based on Area"></SearchField>
									<ToolbarSpacer/>
									<!--<CheckBox text="All" valueState="None" selected="true"/>-->
									<!--<CheckBox text="Available" valueState="Success" enabled="false"/>-->
									<Switch state="true" customTextOn="All" customTextOff="Avb" change="onSwitch">
										<layoutData>
											<FlexItemData growFactor="1"/>
										</layoutData>
									</Switch>
								</content>
							</OverflowToolbar>
						</headerToolbar>
						<columns>
							<Column demandPopin="true">
								<Label text="Centre Name" design="Bold"/>
							</Column>
							<!--<Column demandPopin="true" minScreenWidth="Small">-->
							<!--	<Label text="Centre Address" design="Bold"/>-->
							<!--</Column>-->
							<Column demandPopin="true" minScreenWidth="Small">
								<Label text="Area" design="Bold"/>
							</Column>
							<!--<Column demandPopin="true" minScreenWidth="Small">-->
							<!--	<Label text="Pincode" design="Bold"/>-->
							<!--</Column>-->
							<Column demandPopin="true" minScreenWidth="Small">
								<Label text="1st Dose Slots" design="Bold" wrappingType="Normal" wrapping="true"/>
							</Column>
							<Column demandPopin="true" minScreenWidth="Small">
								<Label text="2nd Dose Slots" design="Bold" wrappingType="Hyphenated" wrapping="true"/>
							</Column>
							<Column demandPopin="true" minScreenWidth="Small">
								<Label text="Date" design="Bold"/>
							</Column>
							<Column demandPopin="true" minScreenWidth="Small">
								<Label text="Age" design="Bold"/>
							</Column>
							<Column demandPopin="true" minScreenWidth="Small">
								<Label text="Vaccine" design="Bold"/>
							</Column>
							<Column demandPopin="true" minScreenWidth="Small">
								<Label text="Fees" design="Bold"/>
							</Column>
							<Column demandPopin="true" minScreenWidth="Small">
								<Label text="Next Slots" design="Bold"/>
							</Column>
							<Column demandPopin="true" minScreenWidth="Small">
								<Label text="Address" design="Bold"/>
							</Column>
						</columns>
						<items>
							<ColumnListItem press="handleNav">
								<cells>
									<Text text="{DataSlots>name}"/>
									<!--<Text text="{DataSlots>address} ,{DataSlots>district_name}, {DataSlots>state_name}"/>-->
									<Text text="{DataSlots>block_name}" wrapping="false"/>
									<!--<Text text="{DataSlots>pincode}"/>-->
									<ObjectNumber number="{DataSlots>sessions/0/available_capacity_dose1}"
										state="{ path: 'DataSlots>sessions/0/available_capacity_dose1', formatter: '.formatter.doseCheck' }"/>
									<ObjectNumber number="{DataSlots>sessions/0/available_capacity_dose2}"
										state="{ path: 'DataSlots>sessions/0/available_capacity_dose2', formatter: '.formatter.doseCheck' }"/>
									<!--<Text text="{DataSlots>sessions/0/available_capacity_dose1}"/>-->
									<!--<Text text="{DataSlots>sessions/0/available_capacity_dose2}"/>-->
									<Text text="{DataSlots>sessions/0/date}" wrapping="false"/>
									<!--<Text text="{DataSlots>sessions/0/vaccine}"/>-->
									<ObjectStatus text="{ path: 'DataSlots>sessions/0/min_age_limit', formatter: '.formatter.ageAdjust' }"
										state="{ path: 'DataSlots>sessions/0/min_age_limit', formatter: '.formatter.ageCheck' }"/>
									<ObjectStatus text="{DataSlots>sessions/0/vaccine}" state="{ path: 'DataSlots>sessions/0/vaccine', formatter: '.formatter.vaccineCheck' }"/>
									<ObjectStatus text="{DataSlots>fee_type}" state="{ path: 'DataSlots>sessions/0/fee_type', formatter: '.formatter.RateCheck' }"/>
									<Button icon="sap-icon://syringe" press="onGetSlots"></Button>
									<Button icon="sap-icon://addresses" press="onGetAddress"></Button>
								</cells>
							</ColumnListItem>
						</items>
					</Table>
				</f:content>
			</f:SimpleForm>
		</content>
	</Page>
</mvc:View>
